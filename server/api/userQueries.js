import { Router } from 'express'
const connection = require('../configs/sequelize')
const bodyParser = require('body-parser')

const router = Router()

/* POST a query for a single table. */
router.post('/singleTable', bodyParser.json(), function (req, res, next) {
  const tableName = req.body.table
  const columns = req.body.columns

  const conditions = req.body.conditions
  const conditionsString = conditions.map((condition) => {
    return `${condition.key} ${condition.operator} '${condition.value}'`
  })

  const where = conditions.length
    ? ` WHERE ${conditionsString.join(' AND ')}`
    : ''

  const query = `SELECT ${columns.join(', ')} FROM ${tableName}${where};`
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
