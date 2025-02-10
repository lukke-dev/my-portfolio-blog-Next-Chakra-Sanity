import React from 'react'
import { PostCard } from '@/components'
import { getAllPosts } from '@src/queries'
import { GetStaticProps } from '@node_modules/next'
import { Box, Heading, useColorModeValue, Grid } from '@chakra-ui/react'

type PostsProps = {
  posts: Post[]
}

const Posts: React.FC<PostsProps> = ({ posts }) => {
  return (
    <>
      <Box
        mb="4"
        w="full"
        borderBottom="1px"
        borderColor={useColorModeValue('blackAlpha.300', 'whiteAlpha.400')}
      >
        <Heading
          size="lg"
          color={useColorModeValue('gray.700', 'whiteAlpha.900')}
        >
          Posts
        </Heading>
      </Box>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {posts.map(({ id, nameEN, slug, minutesToRead }) => {
          return (
            <PostCard
              key={id}
              slug={slug}
              postTitle={nameEN}
              postFooter={`Feb 08, 2021 · ${minutesToRead}min read`}
              postDescription="Lorem ipsum dolor sit amet, consetetur sadipscing elitr ..."
              imageUrl="https://www.insightssuccess.in/wp-content/uploads/2016/12/IMAGE-insights.jpg"
            />
          )
        })}
      </Grid>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts()
  return {
    props: {
      posts,
    },
    revalidate: 60 * 60 * 10 * 7, // 1 week
  }
}

export default Posts
