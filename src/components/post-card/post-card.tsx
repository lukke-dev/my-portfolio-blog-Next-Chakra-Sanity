import React, { useRef } from 'react'
import {
  Box,
  Text,
  Image,
  VStack,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react'
import { useHover } from 'usehooks-ts'
import { PostCardProps } from './types'
import { useRouter } from 'next/navigation'

export const PostCard: React.FC<PostCardProps> = ({
  slug,
  imageUrl,
  postTitle,
  postFooter,
  postDescription,
}) => {
  const router = useRouter()
  const hoverRef = useRef(null)
  const isHover = useHover(hoverRef)

  return (
    <VStack
      p="3"
      ref={hoverRef}
      cursor="pointer"
      borderRadius="4"
      borderWidth="1px"
      onClick={() => router.push(`/posts/${slug}`)}
      borderColor={useColorModeValue('blackAlpha.300', 'whiteAlpha.400')}
    >
      <Box w="full" overflow="hidden">
        <Image
          w="full"
          h="36"
          alt="post"
          src={imageUrl}
          borderRadius="4"
          objectFit="cover"
          transition="all 0.4s ease 0.1s"
          {...(isHover && {
            transform: 'scale(1.1)',
          })}
        />
      </Box>

      <Heading color={useColorModeValue('gray.700', 'white')} fontSize={'xl'}>
        {postTitle}
      </Heading>
      <Text color={'gray.500'}>{postDescription}</Text>

      <Text fontSize="sm" color={'gray.600'} w="full">
        {postFooter}
      </Text>
    </VStack>
  )
}
