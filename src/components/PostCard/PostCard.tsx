import {
  Text,
  Image,
  VStack,
  Heading,
  useColorModeValue,
  Box,
} from '@chakra-ui/react'
import { useRef } from 'react'
import { useHover } from 'usehooks-ts'

type PostCardProps = {
  imageUrl: string
  postTitle: string
  postDescription: string
  postFooter: string
}

export const PostCard: React.FC<PostCardProps> = ({
  imageUrl,
  postTitle,
  postDescription,
  postFooter,
}) => {
  const hoverRef = useRef(null)
  const isHover = useHover(hoverRef)
  return (
    <VStack
      p="3"
      ref={hoverRef}
      cursor="pointer"
      borderRadius="4"
      borderWidth="1px"
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
          transition="all 0.2s ease 0s"
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
