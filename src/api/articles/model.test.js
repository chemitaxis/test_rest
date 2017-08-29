import { Articles } from '.'

let articles

beforeEach(async () => {
  articles = await Articles.create({ type: 'test', garment: 'test', brand: 'test', supplier: 'test', name: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = articles.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(articles.id)
    expect(view.type).toBe(articles.type)
    expect(view.garment).toBe(articles.garment)
    expect(view.brand).toBe(articles.brand)
    expect(view.supplier).toBe(articles.supplier)
    expect(view.name).toBe(articles.name)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = articles.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(articles.id)
    expect(view.type).toBe(articles.type)
    expect(view.garment).toBe(articles.garment)
    expect(view.brand).toBe(articles.brand)
    expect(view.supplier).toBe(articles.supplier)
    expect(view.name).toBe(articles.name)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
