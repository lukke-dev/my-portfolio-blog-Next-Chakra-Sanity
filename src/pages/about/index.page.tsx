import React from 'react'
import {
  Box,
  Link,
  Text,
  VStack,
  Button,
  Heading,
  Highlight,
  useColorModeValue,
} from '@chakra-ui/react'
import { FaGithubAlt } from 'react-icons/fa'

const About: React.FC = () => {
  return (
    <>
      <Box
        mb="4"
        w="full"
        borderBottom="1px"
        borderColor={useColorModeValue('blackAlpha.300', 'whiteAlpha.400')}
      >
        <Heading
          size="lg"
          color={useColorModeValue('gray.700', 'whiteAlpha.900')}
        >
          About me
        </Heading>
      </Box>
      <VStack align="flex-start" spacing="4" pr="20">
        <Text fontSize="lg">
          Hello! 👋
          <br />
          <br />
          My name is Lucas dos Santos, I am from Joinville/SC, I&apos;ve been
          working as a Software Developer for 3 years, using mainly Ruby on
          rails and React. I love these technologies and I improve every day to
          become master in them. I&apos;m also interested in Design patterns,
          Architecture and design of applications.
          <br />
          <br />
          In my spare time, I like to travel, play video games, and learn new
          things about ruby 🧑‍💻.
          <br />
          If you wanna know me better visit my github, and see what I&apos;m
          working on.
          <br />
          <br />
          As Linus Torvalds would say:{' '}
          <Highlight
            query="Talk is cheap, show me the code."
            styles={{ px: '1', py: '1', bg: 'pink.100' }}
          >
            Talk is cheap, show me the code.
          </Highlight>
        </Text>
        <Button
          mt="4"
          as={Link}
          isExternal
          colorScheme={'teal'}
          leftIcon={<FaGithubAlt />}
          href="https://github.com/lukke-dev"
        >
          <Text>Visit my Github</Text>
        </Button>
      </VStack>
    </>
  )
}

export default About
