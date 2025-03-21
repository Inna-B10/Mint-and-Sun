export const POSTS_QUERY = `{
  "posts": *[_type=='posts'] | order(publishedDate desc)[$start...$end] {_id, publishedDate,title,slug{current},description,icon},
  "total": count(*[_type=='posts'])
  }`

export const POST_QUERY = `*[_type=="posts" && slug.current ==$slug][0]{slug, meta_title, icon,description,publishedDate,body,title}`

export const POSTS_SEARCH = `{
  "posts": *[_type=='posts' && (title match $query + "*" || body[].children[].text match $query + "*" || description match $query + "*")] | order(publishedDate desc) {_id, publishedDate,title,slug{current},description,icon}
  }`
