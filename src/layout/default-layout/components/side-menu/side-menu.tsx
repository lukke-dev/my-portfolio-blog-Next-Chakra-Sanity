import React from 'react'
import { IconLink } from '@/components'
import { Link } from '@chakra-ui/next-js'
import { usePathname } from 'next/navigation'
import { RiProfileLine } from 'react-icons/ri'
import { FaHome, FaBlog } from 'react-icons/fa'
import { BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs'
import { Avatar, VStack, Heading, Text, HStack, Icon } from '@chakra-ui/react'

export const SideMenu: React.FC = () => {
  const pathname = usePathname()

  const menuLinks = [
    {
      title: 'Home',
      href: '/',
      icon: FaHome,
    },
    {
      title: 'About me',
      href: '/about',
      icon: RiProfileLine,
    },
    {
      title: 'Blog Posts',
      href: '/posts',
      icon: FaBlog,
    },
  ]

  return (
    <VStack py="14" px="8" spacing="20" h="full">
      <VStack spacing="4">
        <Avatar size="xl" src="https://github.com/lukke-dev.png" />
        <Heading size="md">Lucas dos Santos</Heading>
        <Text textAlign="center">
          Ruby & React fan, fascinated by building software and drinking coffee
          ☕
        </Text>
      </VStack>
      <VStack spacing="5" fontSize="lg" justify="center">
        {menuLinks.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            display="flex"
            lineHeight="none"
            alignItems="center"
            {...(link.href === pathname && {
              color: 'teal.400',
            })}
          >
            <Icon as={link.icon} mr="2" />
            {link.title}
          </Link>
        ))}
      </VStack>
      <HStack spacing="6">
        <IconLink icon={BsGithub} href="https://github.com/lukke-dev" />
        <IconLink
          icon={BsLinkedin}
          href="https://www.linkedin.com/in/lucas--dos--santos"
        />
        <IconLink
          icon={BsInstagram}
          href="https://www.instagram.com/lucas._luke/"
        />
      </HStack>
    </VStack>
  )
}
