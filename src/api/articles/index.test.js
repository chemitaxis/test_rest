import request from 'supertest-as-promised'
import express from '../../services/express'
import routes, { Articles } from '.'

const app = () => express(routes)

let articles

beforeEach(async () => {
  articles = await Articles.create({})
})

test('POST /articles 201', async () => {
  const { status, body } = await request(app())
    .post('/')
    .send({ type: 'test', garment: 'test', brand: 'test', supplier: 'test', name: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.type).toEqual('test')
  expect(body.garment).toEqual('test')
  expect(body.brand).toEqual('test')
  expect(body.supplier).toEqual('test')
  expect(body.name).toEqual('test')
})

test('GET /articles 200', async () => {
  const { status, body } = await request(app())
    .get('/')
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /articles/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`/${articles.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(articles.id)
})

test('GET /articles/:id 404', async () => {
  const { status } = await request(app())
    .get('/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /articles/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`/${articles.id}`)
    .send({ type: 'test', garment: 'test', brand: 'test', supplier: 'test', name: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(articles.id)
  expect(body.type).toEqual('test')
  expect(body.garment).toEqual('test')
  expect(body.brand).toEqual('test')
  expect(body.supplier).toEqual('test')
  expect(body.name).toEqual('test')
})

test('PUT /articles/:id 404', async () => {
  const { status } = await request(app())
    .put('/123456789098765432123456')
    .send({ type: 'test', garment: 'test', brand: 'test', supplier: 'test', name: 'test' })
  expect(status).toBe(404)
})

test('DELETE /articles/:id 204', async () => {
  const { status } = await request(app())
    .delete(`/${articles.id}`)
  expect(status).toBe(204)
})

test('DELETE /articles/:id 404', async () => {
  const { status } = await request(app())
    .delete('/123456789098765432123456')
  expect(status).toBe(404)
})
