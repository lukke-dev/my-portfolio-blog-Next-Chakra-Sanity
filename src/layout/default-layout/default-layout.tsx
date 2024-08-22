import React from 'react'
import { DefaultLayoutProps } from './types'
import { Header, SideMenu } from './components'
import { Grid, GridItem, VStack, useColorModeValue } from '@chakra-ui/react'

export const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <Grid
      h="100vh"
      w="100vw"
      templateRows="50px 1fr"
      templateColumns="repeat(8, 2fr)"
      bg={useColorModeValue('gray.100', 'gray.800')}
    >
      <GridItem
        colSpan={2}
        rowSpan={2}
        borderRight="1px"
        bg={useColorModeValue('gray.200', 'gray.700')}
        borderColor={useColorModeValue('blackAlpha.300', 'whiteAlpha.400')}
      >
        <SideMenu />
      </GridItem>

      <GridItem colSpan={6} borderColor="blackAlpha.200">
        <Header />
      </GridItem>

      <GridItem colSpan={6} overflowX="hidden">
        <VStack h="full" align="start" px="8">
          {children}
        </VStack>
      </GridItem>
    </Grid>
  )
}
