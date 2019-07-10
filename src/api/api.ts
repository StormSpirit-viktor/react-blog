const base = process.env.NODE_ENV === 'development' ? 'http://localhost:7001' : ''

export const getArticleListPath = `${base}/blog/api/v1/list`
export const getHotArticleListPath = `${base}/blog/api/v1/hot`
export const getTagsPath = `${base}/blog/api/v1/tags`
