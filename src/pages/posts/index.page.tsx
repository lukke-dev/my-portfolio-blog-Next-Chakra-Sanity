import React from 'react'
import { PostCard } from '@/components'
import { Box, Heading, useColorModeValue, Grid } from '@chakra-ui/react'

const Posts: React.FC = () => {
  return (
    <>
      <Box
        w="full"
        mb="4" // remover ou mudar dps
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
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        <PostCard
          imageUrl="https://ml2bqlaoxl7w.i.optimole.com/w:825/h:510/q:mauto/f:avif/https://www.extwebtech.com/wp-content/uploads/2023/02/ror-react.webp"
          postTitle="Boost your conversion rate lorem ipsum"
          postDescription="Lorem ipsum dolor sit amet, consetetur sadipscing elitr ..."
          postFooter="Feb 08, 2021 · 6min read"
        />
        <PostCard
          imageUrl="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          postTitle="Boost your conversion rate lorem ipsum"
          postDescription="Lorem ipsum dolor sit amet, consetetur sadipscing elitr ..."
          postFooter="Feb 08, 2021 · 6min read"
        />
        <PostCard
          imageUrl="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          postTitle="Boost your conversion rate lorem ipsum"
          postDescription="Lorem ipsum dolor sit amet, consetetur sadipscing elitr ..."
          postFooter="Feb 08, 2021 · 6min read"
        />
        <PostCard
          imageUrl="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          postTitle="Boost your conversion rate lorem ipsum"
          postDescription="Lorem ipsum dolor sit amet, consetetur sadipscing elitr ..."
          postFooter="Feb 08, 2021 · 6min read"
        />
        <PostCard
          imageUrl="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          postTitle="Boost your conversion rate lorem ipsum"
          postDescription="Lorem ipsum dolor sit amet, consetetur sadipscing elitr ..."
          postFooter="Feb 08, 2021 · 6min read"
        />
      </Grid>
    </>
  )
}

export default Posts
