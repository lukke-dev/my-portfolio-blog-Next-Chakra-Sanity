import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { sanityClient } from '@src/utils'
import { Heading, Image } from '@chakra-ui/react'
import { getPostBySlug } from '@src/queries'
import imageUrlBuilder from '@sanity/image-url'
import { PortableText, PortableTextComponents } from '@portabletext/react'

const urlFor = (source): any => {
  return imageUrlBuilder(sanityClient).image(source)
}

const portableComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null
      }
      return <Image alt={value.alt || "'"} loading="lazy" src={urlFor(value)} />
    },
  },
  block: {
    h1: ({ children }) => (
      <Heading as="h1" size="4xl" noOfLines={1}>
        {children}
      </Heading>
    ),
    h2: ({ children }) => (
      <Heading as="h2" size="3xl" noOfLines={1}>
        {children}
      </Heading>
    ),
    h3: ({ children }) => (
      <Heading as="h3" size="lg">
        {children}
      </Heading>
    ),
  },
}

const Post: React.FC = () => {
  const router = useRouter()

  const [post, setPost] = useState<Post | undefined>()

  useEffect(() => {
    const getPost = async () => {
      const post: Post = await getPostBySlug(String(router.query.slug))
      if (post) {
        setPost(post)
        console.log('post ', post)
      }
    }

    getPost()
  }, [router])

  if (!post) {
    return <div></div>
  }

  return (
    <div>
      <PortableText value={post.contentPT} components={portableComponents} />
    </div>
  )
}

export default Post
