import { Box, Heading, VStack, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

const Portfolio: React.FC = () => {
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
          Portfolio
        </Heading>
      </Box>
      <VStack align="flex-start" spacing="4" pr="20">
        <Heading color="pink.500">hello world</Heading>
      </VStack>
    </>
  )
}

export default Portfolio
