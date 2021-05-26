import { Image } from '@chakra-ui/image'
import { Box, Flex, HStack, Text } from '@chakra-ui/layout'
import { Menu, MenuButton, MenuDivider, MenuItem, MenuList } from '@chakra-ui/menu'
import React from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { onLogout } from '../actions/authentication'

function Navbar() {
  let history = useHistory();
  let location = useLocation();

  const handleLogout = () => {
    onLogout();
    alert('logged out.');

    let { from } = location.state || { from: { pathname: "/" } };
    history.replace(from);
  }

  const NavLink = ({ children, ...rest }) => {
    return <Box color='white' fontSize='large' fontWeight='semibold' borderRadius={4} p={2} _hover={{
      bg: 'orange'
    }} >
      <Link {...rest} color='white'>
        {children}
      </Link>
    </Box>
  }

  const username = localStorage.getItem('username');

  return (
    <>
      <Flex width='100%' h={70} bg='orange.400' alignItems='center' justifyContent='space-between'>
        <Box width='100%'  >
          <HStack alignItems='center' spacing={8} float='left'>
            <Box w={180}>
              <Link to='/home'>
                <Image src='/logo.png' objectFit='contain' rounded='full' />
              </Link>
            </Box>
            <HStack alignItems='center' spacing={4} >
              <NavLink to='/words'>My Words</NavLink>
              <NavLink to='/words/add'>Add a Word</NavLink>
              <NavLink to='/study'>Study</NavLink>
            </HStack>
          </HStack>
          <Flex float='right' mr={8}>
            <Menu>
              <MenuButton rounded='full' w='40px' h='40px' m='15px' bg='white' rounded='full' cursor='pointer'  >
                <Text fontSize='2xl' textTransform='uppercase' >{username.charAt(0)}</Text>
              </MenuButton>
              <MenuList>
                <MenuItem _hover={{ bg: 'white', cursor: 'text' }} fontWeight='semibold' >
                  Hi, {username}
                </MenuItem>
                <MenuDivider />
                <Link to='/settings'>
                  <MenuItem>
                    Settings
                    </MenuItem>
                </Link>
                <Link to='/'>
                  <MenuItem onClick={handleLogout}>
                    Logout
                    </MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </Flex>
        </Box>
      </Flex>
    </>
  )
}

export default Navbar
