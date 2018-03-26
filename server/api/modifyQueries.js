import { Router } from 'express'
const connection = require('../configs/sequelize')
const bodyParser = require('body-parser')

const router = Router()

/* POST an insert query. */
router.post('/insert', bodyParser.json(), function (req, res, next) {
  const tables = req.body.tables
  const keys = []
  const values = []
  req.body.attributes.forEach((attribute) => {
    keys.push(attribute.key)
    values.push(attribute.dataType === 'string' ? `'${attribute.value}'` : attribute.value)
  })

  const query = `INSERT INTO ${tables[0]} (${keys.join(', ')}) VALUES (${values.join(', ')}) ;`
  connection.query(query,
    { type: connection.QueryTypes.INSERT })
    .then(result => {
      // result[1] is the number of rows changed
      res.status(200).json({code: 200, message: 'Resource inserted.'})
    })
    .catch(err => {
      console.error(JSON.stringify(err.message))
      res.status(400).json({code: 400, message: err.message})
    })
})

/* POST a delete query. */
router.post('/delete', bodyParser.json(), function (req, res, next) {
  const tableNames = req.body.tables

  const conditions = req.body.conditions
  const conditionsString = conditions.map((condition) => {
    return `${condition.table}.${condition.key} ${condition.operator} '${condition.value}'`
  })

  const where = conditions.length
    ? ` WHERE ${conditionsString.join(' AND ')}`
    : ''

  const query = `DELETE FROM ${tableNames[0]}${where};`
  connection.query(query, { type: connection.QueryTypes.SELECT })
    .then(result => {
      // result[1] is the number of rows changed
      res.status(200).json({code: 200, message: 'Resource deleted.'})
    })
    .catch(err => {
      console.error(JSON.stringify(err.message))
      res.status(400).json({code: 400, message: err.message})
    })
})

/* POST an update query. */
router.post('/update', bodyParser.json(), function (req, res, next) {
  const tableNames = req.body.tables

  const attributesString = req.body.attributes.map((attribute) => {
    return `${attribute.key} = ${attribute.dataType === 'string' ? `'${attribute.value}'` : attribute.value}`
  })

  const conditions = req.body.conditions
  const conditionsString = conditions.map((condition) => {
    return `${condition.table}.${condition.key} ${condition.operator} '${condition.value}'`
  })

  const where = conditions.length
    ? ` WHERE ${conditionsString.join(' AND ')}`
    : ''

  const query = `UPDATE ${tableNames[0]} SET ${attributesString.join(', ')}${where};`
  connection.query(query, { type: connection.QueryTypes.SELECT })
    .then(result => {
      // result[1] is the number of rows changed
      res.status(200).json({code: 200, message: 'Resource updated.'})
    })
    .catch(err => {
      console.error(JSON.stringify(err.message))
      res.status(400).json({code: 400, message: err.message})
    })
})

export default router
