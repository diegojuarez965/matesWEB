import express from 'express'

import { matesFiltered } from '../controllers/mate.controller'

import { mateCreated } from '../controllers/mate.controller'

import { mateUpdated } from '../controllers/mate.controller'

import { mateDeleted } from '../controllers/mate.controller'

const router = express.Router()

router.get('/', matesFiltered)   

router.post('/', mateCreated)

router.put('/:id', mateUpdated)

router.delete('/:id', mateDeleted)

export default router
