import { Button } from '@chakra-ui/button';
import { Input } from '@chakra-ui/input';
import { Box, Flex, Heading, Text } from '@chakra-ui/layout'
import React, { useState } from 'react'
import { loadWords } from '../actions/storage';
import Navbar from '../components/Navbar'

function HomePage() {

  const [words, setWords] = useState([{}]);

  const onLoadWords = async () => {
    const response = await loadWords();
    if (!response[0]) {
      alert('You don\'t have any saved words!.');
    } else {
      console.log(response);
      setWords(response);
    }
  }

  return (
    <Flex height='100vh' width='100vw' display='table'>
      <Navbar />
      <Flex display='inline-table' alignItems='top' justifyContent='center'>
        <Box p={8}>
        <Heading mb={6} textAlign='center' float='left'>
          Welcome
          </Heading>
          <Input float='right' />
        </Box>
        <Box>
        {words[1] ?
          <Box>
            <Text>
              Hello
            </Text>
          </Box> :
          <Button onClick={onLoadWords}>
            Load words
          </Button>}
          <Text>
          {localStorage.getItem('token')}
          <br/>
          {words[0].definiton}
          </Text>
          <Text>
            {words.map(word => <Text>{word.definiton}</Text>)}
          </Text>
          </Box>
      </Flex>
    </Flex>
  )
}

export default HomePage
