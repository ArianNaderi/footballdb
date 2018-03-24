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
        res.status(404).json({})
      }
    })
})

/* POST a query for a single table. */
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
        res.status(404).json({})
      }
    })
})

export default router
