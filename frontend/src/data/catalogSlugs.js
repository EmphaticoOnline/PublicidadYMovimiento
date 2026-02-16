import { categories } from './categories.js'

export const categorySlugs = categories.map(({ id }) => id)

export const seoAliasSlugs = ['inflable-publicitario-con-movimiento']

export const knownCatalogRoutes = [...categorySlugs, ...seoAliasSlugs]
