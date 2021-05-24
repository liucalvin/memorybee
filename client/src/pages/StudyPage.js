import { Button } from '@chakra-ui/button'
import { Box, Flex, Text } from '@chakra-ui/layout'
import React, { useState } from 'react'
import { loadWords } from '../actions/storage';

function StudyPage() {

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
    <Flex>
      Study words
      <Flex p={8} display='inline-table' width='100vw' alignItems='top' justifyContent='left'>
          {words ?
            <Box>
              <Text>
                {/* {words[0].examples[0]} */}
              </Text>
            </Box> : <Box />}
          <Button onClick={onLoadWords}>
            Load words
          </Button>
          <Text>
            {/* {localStorage.getItem('token')} */}
            <br />
            {/* {words} */}
          </Text>
          <Text>
            {/* {words.map(word => <Text>{word.definiton}</Text>)} */}
          </Text>
        </Flex>
    </Flex>
  )
}

export default StudyPage
