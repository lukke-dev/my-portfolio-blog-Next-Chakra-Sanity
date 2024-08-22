import React from 'react'
import { IconLinkProps } from './types'
import { Icon, Link, useColorModeValue } from '@chakra-ui/react'

export const IconLink: React.FC<IconLinkProps> = ({ icon, href }) => {
  return (
    <Link href={href} boxSize={6} isExternal>
      <Icon
        as={icon}
        boxSize={6}
        color={useColorModeValue('blackAlpha.700', 'whiteAlpha.800')}
        _hover={{
          color: 'teal.500',
        }}
      />
    </Link>
  )
}
