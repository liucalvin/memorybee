import { Button } from '@chakra-ui/button'
import { Image } from '@chakra-ui/image'
import { Box, Flex, Heading } from '@chakra-ui/layout'
import React from 'react'
import { Link } from 'react-router-dom'

function StartPage() {
  return (
    <Flex height='100vh' alignItems='center' justifyContent='center'>
      <Box p={8} maxWidth="400px">
        <Heading mb={3} textAlign='center'>
          <Image src='/logo.png' />
        </Heading>
        <Box >
          <Link to='/login'>
          <Button m={3} ml={16} float='left' colorScheme='orange' borderRadius={6} type='submit'>
            Log In
            </Button>
        </Link>
        <Link to='/register'>
          <Button m={3} mr={16} borderWidth={2} float='right' borderColor='orange' colorScheme='whiteAlpha' textColor='black' borderRadius={6} type='submit'>
            Register
            </Button>
        </Link>
        </Box>
      </Box>
    </Flex>
  )
}

export default StartPage
