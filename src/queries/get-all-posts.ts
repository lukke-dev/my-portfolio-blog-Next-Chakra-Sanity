import { groq } from 'next-sanity'
import { sanityClient } from '../utils'

const getAllPostsQueries = `
  *[_type == "post"] {
    "id": _id,
    name_en,
    name_pt,
    "slug": slug.current
  }
`

export const getAllPosts = () => {
  return sanityClient.fetch(groq`${getAllPostsQueries}`)
}
