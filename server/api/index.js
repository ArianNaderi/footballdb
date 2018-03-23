import { Router } from 'express'

import users from './users'
import userQueries from './userQueries'

const router = Router()

// Add USERS Routes
router.use(users)
router.use(userQueries)

export default router
