import { Request, Response } from 'express'

import { filterMates } from '../services/mate.service'

import { createMate } from '../services/mate.service'

import { updateMate } from '../services/mate.service'

import { deleteMate } from '../services/mate.service'

export const matesFiltered = async (req: Request, res: Response) => {
  try {
    const result = await filterMates(req.query)
    return res.status(200).send(result)
  } catch (error) {
    console.log(error)
    return res.status(500).send({ message: 'Something went wrong' })
  }
}

export const mateCreated = async (req: Request, res: Response) => {
  try {
    const result = await createMate(req.body)
    return res.status(200).send(result)
  } catch (error) {
    console.log(error)
    return res.status(500).send({ message: 'Something went wrong' })
  }
}

export const mateUpdated = async (req: Request, res: Response) => {
  try {
    const result = await updateMate(req.body)
    return res.status(200).send(result)
  } catch (error) {
    console.log(error)
    return res.status(500).send({ message: 'Something went wrong' })
  }
}

export const mateDeleted = async (req: Request, res: Response) => {
  try {
    const result = await deleteMate(req.params.id)  
    return res.status(200).send(result)
  } catch (error) {
    console.log(error)
    return res.status(500).send({ message: 'Something went wrong' })        
  }
}

