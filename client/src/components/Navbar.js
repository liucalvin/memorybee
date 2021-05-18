import { Button } from '@chakra-ui/button'
import { Image } from '@chakra-ui/image'
import { AspectRatio, Box, Flex } from '@chakra-ui/layout'
import React from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { onLogout } from '../actions/authentication'

function Navbar() {
  let history = useHistory();
  let location = useLocation();

  const handleLogout = () => {
    onLogout();

    let { from } = location.state || { from: { pathname: "/" } };
    history.replace(from);
  }

  return (
    <Flex
      w='100%'
      h={70}
      mb={8}
      p={8}
      background='orange.400'>
      <Box width='100%' position='inherit' height='50px' >
        <AspectRatio maxW='150px' ratio={4}>
          <Image src='/logo.png' float='left' objectFit='contain' rounded='full' mt={-4} />
        </AspectRatio>
        <Link to='/' onClick={handleLogout}>
          <Button float='right' mr={50} mt={-14} >
            Log out
          </Button>
        </Link>
      </Box>
    </Flex>
  )
}

export default Navbar
