import { groq } from 'next-sanity'
import { sanityClient } from '../utils'

const getAllPostsQueries = `
  *[_type == "post"] {
    "id": _id,
    "nameEN": name_en,
    "namePT": name_pt,
    "slug": slug.current,
    "contentEN": content_en,
    "contentPT": content_pt,
    "minutesToRead": minutes_to_read
  }
`

export const getAllPosts = () => {
  return sanityClient.fetch(groq`${getAllPostsQueries}`)
}
