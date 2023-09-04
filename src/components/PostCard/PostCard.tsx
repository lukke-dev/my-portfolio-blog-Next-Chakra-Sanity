import {
  Heading,
  Image,
  Text,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react'

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
  return (
    <VStack
      rounded="md"
      boxShadow={'2xl'}
      bg={useColorModeValue('white', 'gray.900')}
    >
      <Image
        w="full"
        h="180px"
        m={4}
        border="1px solid"
        rounded="xl"
        alt="post"
        src={imageUrl}
      />

      <VStack px="4" pb="3" h="full">
        <Heading
          color={useColorModeValue('gray.700', 'white')}
          fontSize={'xl'}
          fontFamily={'body'}
        >
          {postTitle}
        </Heading>
        <Text color={'gray.500'} h="full">
          {postDescription}
        </Text>

        <Text fontSize="sm" color={'gray.500'} w="full">
          {postFooter}
        </Text>
      </VStack>
    </VStack>
  )
}
