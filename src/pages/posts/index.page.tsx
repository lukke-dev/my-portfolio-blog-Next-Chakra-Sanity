import {
  Box,
  Text,
  Image,
  VStack,
  Heading,
  useColorModeValue,
  SimpleGrid,
} from '@chakra-ui/react'
import React from 'react'

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
      <SimpleGrid minChildWidth="200px" spacing="30px" w="full">
        <VStack
          rounded="md"
          boxShadow={'2xl'}
          bg={useColorModeValue('white', 'gray.900')}
        >
          <Image
            w="full"
            h="180px"
            alt="Example"
            roundedTop="md"
            src={
              'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            }
          />

          <VStack px="4" pb="3" h="full">
            <Heading
              color={useColorModeValue('gray.700', 'white')}
              fontSize={'xl'}
              fontFamily={'body'}
            >
              Boost your conversion rate lorem ipsum
            </Heading>
            <Text color={'gray.500'} h="full">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr ...
            </Text>

            <Text fontSize="sm" color={'gray.500'} w="full">
              Feb 08, 2021 · 6min read
            </Text>
          </VStack>
        </VStack>

        <VStack
          rounded="md"
          boxShadow={'2xl'}
          bg={useColorModeValue('white', 'gray.900')}
        >
          <Image
            w="full"
            h="180px"
            alt="Example"
            roundedTop="md"
            src={
              'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            }
          />

          <VStack px="4" pb="3" h="full">
            <Heading
              color={useColorModeValue('gray.700', 'white')}
              fontSize={'xl'}
              fontFamily={'body'}
            >
              Boost your conversion rate lorem ipsum
            </Heading>
            <Text color={'gray.500'} h="full">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr ...
            </Text>

            <Text fontSize="sm" color={'gray.500'} w="full">
              Feb 08, 2021 · 6min read
            </Text>
          </VStack>
        </VStack>

        <VStack
          rounded="md"
          boxShadow={'2xl'}
          bg={useColorModeValue('white', 'gray.900')}
        >
          <Image
            w="full"
            h="180px"
            alt="Example"
            roundedTop="md"
            src={
              'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            }
          />
          <VStack px="4" pb="3" h="full">
            <Heading
              color={useColorModeValue('gray.700', 'white')}
              fontSize={'xl'}
              fontFamily={'body'}
            >
              Boost your conversion rate lorem ipsum
            </Heading>
            <Text color={'gray.500'} h="full">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr ...
            </Text>

            <Text fontSize="sm" color={'gray.500'} w="full">
              Feb 08, 2021 · 6min read
            </Text>
          </VStack>
        </VStack>

        <VStack
          rounded="md"
          boxShadow={'2xl'}
          bg={useColorModeValue('white', 'gray.900')}
        >
          <Image
            w="full"
            h="180px"
            alt="Example"
            roundedTop="md"
            src={
              'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            }
          />
          <VStack px="4" pb="3" h="full">
            <Heading
              color={useColorModeValue('gray.700', 'white')}
              fontSize={'xl'}
              fontFamily={'body'}
            >
              Boost your conversion rate lorem ipsum
            </Heading>
            <Text color={'gray.500'} h="full">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr ...
            </Text>

            <Text fontSize="sm" color={'gray.500'} w="full">
              Feb 08, 2021 · 6min read
            </Text>
          </VStack>
        </VStack>

        <VStack
          rounded="md"
          boxShadow={'2xl'}
          bg={useColorModeValue('white', 'gray.900')}
        >
          <Image
            w="full"
            h="180px"
            alt="Example"
            roundedTop="md"
            src={
              'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            }
          />
          <VStack px="4" pb="3" h="full">
            <Heading
              color={useColorModeValue('gray.700', 'white')}
              fontSize={'xl'}
              fontFamily={'body'}
            >
              Boost your conversion rate lorem ipsum
            </Heading>
            <Text color={'gray.500'} h="full">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr ...
            </Text>

            <Text fontSize="sm" color={'gray.500'} w="full">
              Feb 08, 2021 · 6min read
            </Text>
          </VStack>
        </VStack>

        <VStack
          rounded="md"
          boxShadow={'2xl'}
          bg={useColorModeValue('white', 'gray.900')}
        >
          <Image
            w="full"
            h="180px"
            alt="Example"
            roundedTop="md"
            src={
              'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            }
          />
          <VStack px="4" pb="3" h="full">
            <Heading
              color={useColorModeValue('gray.700', 'white')}
              fontSize={'xl'}
              fontFamily={'body'}
            >
              Boost your conversion rate lorem ipsum
            </Heading>
            <Text color={'gray.500'} h="full">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr ...
            </Text>

            <Text fontSize="sm" color={'gray.500'} w="full">
              Feb 08, 2021 · 6min read
            </Text>
          </VStack>
        </VStack>

        <VStack
          rounded="md"
          boxShadow={'2xl'}
          bg={useColorModeValue('white', 'gray.900')}
        >
          <Image
            w="full"
            h="180px"
            alt="Example"
            roundedTop="md"
            src={
              'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            }
          />
          <VStack px="4" pb="3" h="full">
            <Heading
              color={useColorModeValue('gray.700', 'white')}
              fontSize={'xl'}
              fontFamily={'body'}
            >
              Boost your conversion rate lorem ipsum
            </Heading>
            <Text color={'gray.500'} h="full">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr ...
            </Text>

            <Text fontSize="sm" color={'gray.500'} w="full">
              Feb 08, 2021 · 6min read
            </Text>
          </VStack>
        </VStack>

        <VStack
          rounded="md"
          boxShadow={'2xl'}
          bg={useColorModeValue('white', 'gray.900')}
        >
          <Image
            w="full"
            h="180px"
            alt="Example"
            roundedTop="md"
            src={
              'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            }
          />
          <VStack px="4" pb="3" h="full">
            <Heading
              color={useColorModeValue('gray.700', 'white')}
              fontSize={'xl'}
              fontFamily={'body'}
            >
              Boost your conversion rate lorem ipsum
            </Heading>
            <Text color={'gray.500'} h="full">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr ...
            </Text>

            <Text fontSize="sm" color={'gray.500'} w="full">
              Feb 08, 2021 · 6min read
            </Text>
          </VStack>
        </VStack>

        <VStack
          rounded="md"
          boxShadow={'2xl'}
          bg={useColorModeValue('white', 'gray.900')}
        >
          <Image
            w="full"
            h="180px"
            alt="Example"
            roundedTop="md"
            src={
              'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            }
          />
          <VStack px="4" pb="3" h="full">
            <Heading
              color={useColorModeValue('gray.700', 'white')}
              fontSize={'xl'}
              fontFamily={'body'}
            >
              Boost your conversion rate lorem ipsum
            </Heading>
            <Text color={'gray.500'} h="full">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr ...
            </Text>

            <Text fontSize="sm" color={'gray.500'} w="full">
              Feb 08, 2021 · 6min read
            </Text>
          </VStack>
        </VStack>
      </SimpleGrid>
    </>
  )
}

export default Posts
