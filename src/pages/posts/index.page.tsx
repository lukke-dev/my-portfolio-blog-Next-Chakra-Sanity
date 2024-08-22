import React from 'react'
import { PostCard } from '@/components'
import { Box, Heading, useColorModeValue, Grid } from '@chakra-ui/react'

const Posts: React.FC = () => {
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

export default Posts
