import request from 'supertest'

import app from './app'

import mates from './matesData'

describe('App Search', () => {
  it('Should return mates', async () => {
    const response = await request(app).get('/mates')
    expect(response.body).toEqual(mates)
    expect(response.body.length).toBe(mates.length)
  })
})
