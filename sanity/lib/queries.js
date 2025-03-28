export const POSTS_QUERY = `{
  "posts": *[_type=='posts'] | order(publishedDate desc)[$start...$end] {_id, publishedDate,title,slug{current},description, category, icon{alt,asset->{_id,url}}},
  "total": count(*[_type=='posts'])
  }`

export const POST_QUERY = `*[_type=="posts" && slug.current ==$slug][0]{slug, meta_title,icon{alt,asset->{_id,url}},description,publishedDate,body,title}`

export const POSTS_SEARCH = `{
  "posts": *[_type=='posts' && (title match $query + "*" || body[].children[].text match $query + "*" || description match $query + "*")] | order(publishedDate desc) {_id, publishedDate,title,slug{current},description, category,icon{alt,asset->{_id,url}}}
  }`

export const POSTS_BY_CATEGORY = `
  *[_type=='posts' && references($categoryId)]
  | order(publishedDate desc) 
  {_id, publishedDate,title,slug{current},description, category,icon{alt,asset->{_id,url}}}
`
