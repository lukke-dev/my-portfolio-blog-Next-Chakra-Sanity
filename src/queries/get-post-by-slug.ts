import { groq } from 'next-sanity'
import { sanityClient } from '../utils'

const getPostBySlugQuery = `
  *[_type == "post" && slug.current == $slug][0] {
    ...,
    "id": _id,
    "nameEN": name_en,
    "namePT": name_pt,
    "slug": slug.current,
    "contentEN": content_en,
    "contentPT": content_pt,
    "createdAt": _createdAt,
    "minutesToRead": minutes_to_read
  }
`

export const getPostBySlug = (slug: string) => {
  return sanityClient.fetch(groq`${getPostBySlugQuery}`, { slug })
}
