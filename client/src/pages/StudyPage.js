import { Button } from '@chakra-ui/button'
import { Box, Center, Flex, Text } from '@chakra-ui/layout'
import React, { useState } from 'react'
import { loadWords } from '../actions/storage';
import Navbar from '../components/Navbar';

function StudyPage() {

  const [words, setWords] = useState([{}]);

  const onLoadWords = async () => {
    const response = await loadWords();
    if (!response[0]) {
      alert('You don\'t have any saved words!.');
    } else {
      console.log(response);
      console.log(words[0].word);
      setWords(response);
    }
  }

  return (
    <>
      <Navbar />
      <Flex>
        <Flex p={8} display='inline-table' width='100vw' alignItems='top' justifyContent='left'>
          {
            words[0].word == null
              ?
              <Center>
                <Button onClick={onLoadWords}>
                  Load words
                </Button>
              </Center>
              :
              <Center>
                <Flex p={8} bg='gray.100' border='black' borderColor='black' borderRadius={20} >

                  <Text textTransform='unset' >
                    {/* {words.array.forEach(definition => {
                      <Text>{definition}</Text>
                    })} */}
                    What does {words[0].word} mean in the phrase, "{words[0].examples[0]}"?
                  </Text>
                  <Text>
                    {/* {words.map(word => <Text>{word.definiton}</Text>)} */}
                  </Text>
                </Flex>
              </Center>
          }
        </Flex>
      </Flex>
    </>
  )
}

export default StudyPage
