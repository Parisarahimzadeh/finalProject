import {Box, Flex, HStack, Link, IconButton, Icon, Text, useDisclosure, Button, Stack, useColorModeValue, useColorMode } from '@chakra-ui/react'
import {Link as ReactLink } from 'react-router-dom'
import {HamburgerIcon, CloseIcon, MoonIcon, SunICon} from '@chakra-ui/icons'
import { SiIfood } from "react-icons/si";
import React from 'react';


function Navbar() {
    const {isOpen, onClose, onOpen} = useDisclosure();
    const {colorMode, toggleColorMode} = useDisclosure();

  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems='center' justifyContent='space-between'>
            <IconButton 
            size='md'
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            display={{md:'none'}}
            onClick={isOpen ? onClose : onOpen}
            />

            <HStack>
                <Link as={ReactLink} to='/'>
                    <Flex alignItems='center'>
                        <Icon as={SiIfood} h={6} w={6} color='purple.400' />
                        <Text fontWeight='extrabold' >Foodie</Text>
                    </Flex>
                </Link>
            </HStack>
        </Flex>
    </Box>
  );
};

export default Navbar