import { Router } from 'express'

import users from './users'
import userQueries from './userQueries'
import modifyQueries from './modifyQueries'

const router = Router()

// Add USERS Routes
router.use(users)
router.use(userQueries)
router.use(modifyQueries)

export default router
