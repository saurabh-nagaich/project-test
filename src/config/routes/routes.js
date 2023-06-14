export const CATEGORY_SLUG ="sub_category_slug"
export const CATEGORY_VIEW_SLUG ="detail_category"
const basicRoutes ={
    HOME:'/',
    CATEGORY_SLUG:`:${CATEGORY_VIEW_SLUG}`,
    SUB_CATEGORY_SLUG: `:${CATEGORY_SLUG}`
}

export default Object.freeze(basicRoutes)