import { Router } from 'express'
import querymen, { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Articles, { schema } from './model'

const router = new Router()
const { type, garment, brand, supplier, name } = schema.tree

const customSchema = new querymen.Schema({
  type: String,
  garment: String,
  brand: String,
  supplier: String,
  name: RegExp
})

/**
 * @api {post} /articles Create articles
 * @apiName CreateArticles
 * @apiGroup Articles
 * @apiParam type Articles's type.
 * @apiParam garment Articles's garment.
 * @apiParam brand Articles's brand.
 * @apiParam supplier Articles's supplier.
 * @apiParam name Articles's name.
 * @apiSuccess {Object} articles Articles's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Articles not found.
 */
router.post('/', body({ type, garment, brand, supplier, name }), create)

/**
 * @api {get} /articles Retrieve articles
 * @apiName RetrieveArticles
 * @apiGroup Articles
 * @apiUse listParams
 * @apiSuccess {Object[]} articles List of articles.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/', query({ customSchema }), index)

/**
 * @api {get} /articles/:id Retrieve articles
 * @apiName RetrieveArticles
 * @apiGroup Articles
 * @apiSuccess {Object} articles Articles's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Articles not found.
 */
router.get('/:id', show)

/**
 * @api {put} /articles/:id Update articles
 * @apiName UpdateArticles
 * @apiGroup Articles
 * @apiParam type Articles's type.
 * @apiParam garment Articles's garment.
 * @apiParam brand Articles's brand.
 * @apiParam supplier Articles's supplier.
 * @apiParam name Articles's name.
 * @apiSuccess {Object} articles Articles's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Articles not found.
 */
router.put('/:id', body({ type, garment, brand, supplier, name }), update)

/**
 * @api {delete} /articles/:id Delete articles
 * @apiName DeleteArticles
 * @apiGroup Articles
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Articles not found.
 */
router.delete('/:id', destroy)

export default router
