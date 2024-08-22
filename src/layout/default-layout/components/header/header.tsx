import React from 'react'
import {
  List,
  Text,
  Icon,
  Modal,
  Input,
  HStack,
  Button,
  ListItem,
  ModalBody,
  IconButton,
  InputGroup,
  ModalContent,
  ModalOverlay,
  useColorMode,
  useDisclosure,
  InputLeftElement,
  useColorModeValue,
} from '@chakra-ui/react'
import {
  BsSearch,
  BsSunFill,
  BsMoonStarsFill,
  BsArrowReturnLeft,
  BsFillFilePostFill,
} from 'react-icons/bs'
import { Link } from '@chakra-ui/next-js'

export const Header: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <HStack justify="flex-end" align="center" h="full" px="2">
      <IconButton
        onClick={onOpen}
        aria-label="search"
        icon={<BsSearch size={18} />}
        bg={useColorModeValue('', 'gray.800')}
      />
      <IconButton
        onClick={toggleColorMode}
        aria-label="switch-color"
        bg={useColorModeValue('', 'gray.800')}
        icon={colorMode === 'light' ? <BsMoonStarsFill /> : <BsSunFill />}
      />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent minW="600px">
          <ModalBody p="6">
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <Icon as={BsSearch} color="teal.400" boxSize={5} />
              </InputLeftElement>
              <Input
                type="text"
                border="none"
                placeholder="Search a post"
                _focus={{ boxShadow: 'none' }}
              />
            </InputGroup>
            <List spacing={3} mt="6">
              {[0, 1, 2, 3, 4, 5].map((key) => (
                <ListItem key={key}>
                  <Button
                    as={Link}
                    href="/"
                    w="full"
                    py="6"
                    _hover={{ bg: 'teal.400', color: 'white' }}
                    leftIcon={<BsFillFilePostFill />}
                    rightIcon={<BsArrowReturnLeft />}
                  >
                    <Text w="full" textAlign="start" ml="2">
                      blog post
                    </Text>
                  </Button>
                </ListItem>
              ))}
            </List>
          </ModalBody>
        </ModalContent>
      </Modal>
    </HStack>
  )
}
