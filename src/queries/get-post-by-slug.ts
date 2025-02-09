import { groq } from 'next-sanity'
import { sanityClient } from '../utils'

const getPostBySlugQuery = `
  *[_type == "post" && slug.current == $slug][0] {
    ...,
    "id": _id,
    "name_en": name_en,
    "name_pt": name_pt,
    "content_en": content_en,
    "content_pt": content_pt,
    "slug": slug.current
  }
`

export const getPostBySlug = (slug: string) => {
  return sanityClient.fetch(groq`${getPostBySlugQuery}`, { slug })
}
