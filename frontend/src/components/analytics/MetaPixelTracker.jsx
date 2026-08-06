import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { categories } from '../../data/categories'
import { subcategories } from '../../data/subcategories'
import { initMetaPixel, trackPageView, trackViewContent } from '../../utils/metaPixel'

const categoryByPath = new Map(
  categories.map(category => [category.link, category])
)

const redirectPaths = new Set(['/test-inflables-guadalajara', '/tomi-publicitario'])

export default function MetaPixelTracker() {
  const { pathname, search } = useLocation()

  useEffect(() => {
    if (redirectPaths.has(pathname)) return

    initMetaPixel()
    const pagePath = `${pathname}${search}`
    trackPageView(pagePath)

    const category = categoryByPath.get(pathname)
    if (category) {
      trackViewContent({
        content_name: category.label,
        content_ids: [category.id],
        content_type: 'product_group',
        content_category: category.id,
        page_path: pagePath,
      })
      return
    }

    if (pathname !== '/catalogo') return
    const params = new URLSearchParams(search)
    const categoryId = params.get('categoria')
    const subcategoryId = params.get('sub')
    const validSubcategory = (subcategories[categoryId] || []).find(item => item.id === subcategoryId)
    if (!validSubcategory) return

    const categoryLabel = categories.find(item => item.id === categoryId)?.label || categoryId
    trackViewContent({
      content_name: validSubcategory.label,
      content_ids: [`${categoryId}:${subcategoryId}`],
      content_type: 'product_group',
      content_category: categoryLabel,
      page_path: pagePath,
    })
  }, [pathname, search])

  return null
}
