import { Flex } from '@chakra-ui/layout'
import { Heading, List } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { loadWords } from '../actions/storage';
import Navbar from '../components/Navbar'
import WordItem from '../components/WordItem';

function WordsPage() {

  const [words, setWords] = useState([]);

  const onLoadWords = async () => {
    const response = await loadWords();
    if (!response[0]) {
      console.log(response);
      alert('You don\'t have any saved words!.');
    } else {
      console.log(response);
      setWords(response);
    }
  }

  // useEffect(() => {
  //   console.log(words)
  // }, [words])

  useEffect(() => {
    onLoadWords();
    if (words[0]) {
      if (words[0].definition) {
        if (words[0].definition[0]) {
          console.log(JSON.parse(words[0].definition[0]))
        }
      }
    }

  }, [])

  return (
    <>
      <Navbar />
      <Flex m={8}>
        <Heading>
          Your words:
        </Heading>
        <List ml={8} mr={8}>
          {
            words ?
              words[0] ?
                words.map(word => (
                  word.definition ? <WordItem word={word} /> : ""

                  // word.definition.map(definition => (
                  //   <>
                  //     <h6 key={definition.toString()}>{definition}</h6>
                  //     <br />
                  //   </>
                  // ))
                )) :
                "No Saved Words"
              : ""
          }
        </List>

      </Flex>
    </>
  )
}

export default WordsPage
