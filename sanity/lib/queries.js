import { defineQuery } from 'next-sanity'

export const POSTS_QUERY = defineQuery(`{
  "posts": *[_type=='posts'] | order(publishedDate desc)[$start...$end] {_id, publishedDate,title,slug{current},description,icon},
  "total": count(*[_type=='posts'])
  }`)

export const POST_QUERY = defineQuery(
	`*[_type=="posts" && slug.current ==$slug][0]{slug, meta_title, icon,description,publishedDate,body,title}`
)
