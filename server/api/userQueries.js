import { Router } from 'express'
const connection = require('../configs/sequelize')
const bodyParser = require('body-parser')

const router = Router()

const joinTables = {
  'player-team': ['owns'],
  'team-player': ['owns'],
  'manager-team': ['manages'],
  'team-manager': ['manages'],
  'team-league': ['participates'],
  'league-team': ['participates'],
  'team-match': ['plays'],
  'match-team': ['plays']
}

const joinConditions = {
  'player-team': ['player.id = owns.player_id', 'team.name = owns.team_name'],
  'team-player': ['player.id = owns.player_id', 'team.name = owns.team_name'],
  'manager-team': ['manager.id = manages.manager_id', 'team.name = manages.team_name'],
  'team-manager': ['manager.id = manages.manager_id', 'team.name = manages.team_name'],
  'team-league': ['team.name = participates.team_name', 'league.name = participates.league_name'],
  'league-team': ['team.name = participates.team_name', 'league.name = participates.league_name'],
  'team-match': ['match.id = plays.match_id', 'team.name = plays.team_name'],
  'match-team': ['match.id = plays.match_id', 'team.name = plays.team_name']
}

/* POST a query for a single table. */
router.post('/singleTable', bodyParser.json(), function (req, res, next) {
  const tableNames = req.body.tables
  const columns = req.body.columns

  const conditions = req.body.conditions
  const conditionsString = conditions.map((condition) => {
    return `${condition.table}.${condition.key} ${condition.operator} '${condition.value}'`
  })

  const where = conditions.length
    ? ` WHERE ${conditionsString.join(' AND ')}`
    : ''

  const query = `SELECT ${columns.join(', ')} FROM ${tableNames[0]}${where};`
  connection.query(query, { type: connection.QueryTypes.SELECT })
    .then(tuples => {
      console.log(tuples)
      if (tuples.length) {
        res.json(tuples)
      } else {
        res.status(404).json({code: 404, message: 'No records found.'})
      }
    })
})

/* POST a query for a join. */
router.post('/join', bodyParser.json(), function (req, res, next) {
  const tableNames = JSON.parse(JSON.stringify(req.body.tables))
  tableNames.push(...joinTables[req.body.tables.join('-')])

  const columns = req.body.columns

  const conditions = req.body.conditions
  const conditionsString = conditions.map((condition) => {
    return `${condition.table}.${condition.key} ${condition.operator} '${condition.value}'`
  })
  conditionsString.push(...joinConditions[req.body.tables.join('-')])

  const where = conditions.length
    ? ` WHERE ${conditionsString.join(' AND ')}`
    : ''

  const query = `SELECT ${columns.join(', ')} FROM ${tableNames.join(', ')}${where};`
  connection.query(query, { type: connection.QueryTypes.SELECT })
    .then(tuples => {
      console.log(tuples)
      if (tuples.length) {
        res.json(tuples)
      } else {
        res.status(404).json({code: 404, message: 'No records found.'})
      }
    })
})

/* GET names of teams who have not lost any home games */
router.get('/division', bodyParser.json(), function (req, res, next) {
  const query = `
    select * from team where not exists 
      (select plays.match_id from plays where plays.team_name = team.name and plays.team_type = 'Home' except 
      (select plays.match_id from plays, match where plays.match_id = match.id and plays.team_name = team.name and 
        (match.winner = team.name or match.winner IS NULL))) 
    and (select count(*) from plays where team.name = plays.team_name) > 0`
  connection.query(query, { type: connection.QueryTypes.SELECT })
    .then(tuples => {
      console.log(tuples)
      if (tuples.length) {
        res.json(tuples)
      } else {
        res.status(404).json({code: 404, message: 'No records found.'})
      }
    })
})

/* GET name and capacity of stadium with min/max capacity */
router.get('/aggregation/:function', bodyParser.json(), function (req, res, next) {
  const query = `select name, capacity from stadium where 
    capacity = (select ${req.params.function}(capacity) from stadium)`
  connection.query(query, { type: connection.QueryTypes.SELECT })
    .then(tuples => {
      console.log(tuples)
      if (tuples.length) {
        res.json(tuples)
      } else {
        res.status(404).json({code: 404, message: 'No records found.'})
      }
    })
})

/* GET name and max/min of the avg goals scored by each team */
router.get('/nestedAggregation/:function', bodyParser.json(), function (req, res, next) {
  const query = `
  select name, ${req.params.function}_avg_goals from team, 
    (select ${req.params.function}(avg_goals) as ${req.params.function}_avg_goals from 
        (select team_name, avg(cast(goals as float)) as avg_goals from plays group by team_name) temp) temp1
    where ${req.params.function}_avg_goals = 
        (select avg(cast(goals as float)) as avg_goals from plays where team.name = plays.team_name group by team_name)`
  connection.query(query, { type: connection.QueryTypes.SELECT })
    .then(tuples => {
      console.log(tuples)
      if (tuples.length) {
        res.json(tuples)
      } else {
        res.status(404).json({code: 404, message: 'No records found.'})
      }
    })
})

export default router
