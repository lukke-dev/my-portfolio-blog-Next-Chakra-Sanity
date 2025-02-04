import React from 'react'
import { PostCard } from '@/components'
import { getAllPosts } from '@src/queries'
import { GetStaticProps } from '@node_modules/next'
import { Box, Heading, useColorModeValue, Grid } from '@chakra-ui/react'

const Posts: React.FC = (posts) => {
  console.log('posts: ', posts)

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
        <PostCard
          imageUrl="https://www.insightssuccess.in/wp-content/uploads/2016/12/IMAGE-insights.jpg"
          postTitle="Boost your conversion rate lorem ipsum"
          postDescription="Lorem ipsum dolor sit amet, consetetur sadipscing elitr ..."
          postFooter="Feb 08, 2021 · 6min read"
        />
        <PostCard
          imageUrl="https://www.insightssuccess.in/wp-content/uploads/2016/12/IMAGE-insights.jpg"
          postTitle="Boost your conversion rate lorem ipsum"
          postDescription="Lorem ipsum dolor sit amet, consetetur sadipscing elitr ..."
          postFooter="Feb 08, 2021 · 6min read"
        />
        <PostCard
          imageUrl="https://www.insightssuccess.in/wp-content/uploads/2016/12/IMAGE-insights.jpg"
          postTitle="Boost your conversion rate lorem ipsum"
          postDescription="Lorem ipsum dolor sit amet, consetetur sadipscing elitr ..."
          postFooter="Feb 08, 2021 · 6min read"
        />
        <PostCard
          imageUrl="https://www.insightssuccess.in/wp-content/uploads/2016/12/IMAGE-insights.jpg"
          postTitle="Boost your conversion rate lorem ipsum"
          postDescription="Lorem ipsum dolor sit amet, consetetur sadipscing elitr ..."
          postFooter="Feb 08, 2021 · 6min read"
        />
        <PostCard
          imageUrl="https://www.insightssuccess.in/wp-content/uploads/2016/12/IMAGE-insights.jpg"
          postTitle="Boost your conversion rate lorem ipsum"
          postDescription="Lorem ipsum dolor sit amet, consetetur sadipscing elitr ..."
          postFooter="Feb 08, 2021 · 6min read"
        />
        <PostCard
          imageUrl="https://www.insightssuccess.in/wp-content/uploads/2016/12/IMAGE-insights.jpg"
          postTitle="Boost your conversion rate lorem ipsum"
          postDescription="Lorem ipsum dolor sit amet, consetetur sadipscing elitr ..."
          postFooter="Feb 08, 2021 · 6min read"
        />
        <PostCard
          imageUrl="https://www.insightssuccess.in/wp-content/uploads/2016/12/IMAGE-insights.jpg"
          postTitle="Boost your conversion rate lorem ipsum"
          postDescription="Lorem ipsum dolor sit amet, consetetur sadipscing elitr ..."
          postFooter="Feb 08, 2021 · 6min read"
        />
        <PostCard
          imageUrl="https://www.insightssuccess.in/wp-content/uploads/2016/12/IMAGE-insights.jpg"
          postTitle="Boost your conversion rate lorem ipsum"
          postDescription="Lorem ipsum dolor sit amet, consetetur sadipscing elitr ..."
          postFooter="Feb 08, 2021 · 6min read"
        />
        <PostCard
          imageUrl="https://www.insightssuccess.in/wp-content/uploads/2016/12/IMAGE-insights.jpg"
          postTitle="Boost your conversion rate lorem ipsum"
          postDescription="Lorem ipsum dolor sit amet, consetetur sadipscing elitr ..."
          postFooter="Feb 08, 2021 · 6min read"
        />
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
