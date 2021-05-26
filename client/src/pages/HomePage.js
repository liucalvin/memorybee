import { Button } from '@chakra-ui/button';
import { Box, Flex, Heading, Text } from '@chakra-ui/layout'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { loadWords } from '../actions/storage';
import Navbar from '../components/Navbar'

function HomePage() {

  const numberOfWords = async () => {
    const response = await loadWords();
    if (!response[0]) {
      return 0;
    } else {
      console.log(response)
      return 1; 
    }
  }
  
  return (
    <>
      <Navbar />
      <Flex display='table'>
        <Flex p={8} display='inline-block' alignItems='top' justifyContent='center'>
          <Box mb={6}>
            <Heading>Dashboard</Heading>
          </Box>
          <Box p={4} mb={4}>
            <Text>
              Current study session: {localStorage.getItem('current-session') ? localStorage.getItem('current-session') : 0} words
            <br />
            Total number of flashcards: {numberOfWords} words
          </Text>
          </Box>
          <Link to='/study'>
            <Button>
              Start studying
          </Button>
          </Link>
        </Flex>
      </Flex>
    </>
  )
}

export default HomePage
