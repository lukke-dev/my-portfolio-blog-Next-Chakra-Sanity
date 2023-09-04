import { SideMenu, Header } from '..'
import React, { ReactElement } from 'react'
import { Grid, GridItem, VStack, useColorModeValue } from '@chakra-ui/react'

type DefaultLayoutProps = {
  children: ReactElement
}

export const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <Grid
      h="100vh"
      w="100vw"
      bg={useColorModeValue('gray.100', 'gray.800')}
      templateRows="50px 1fr"
      templateColumns="repeat(8, 2fr)"
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
