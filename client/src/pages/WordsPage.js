import { Flex } from '@chakra-ui/layout'
import React, { useState } from 'react'
import { loadWords } from '../actions/storage';
import Navbar from '../components/Navbar'

function WordsPage() {


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
    <>
      <Navbar />
      <Flex>
        Your words:
    </Flex>
    </>
  )
}

export default WordsPage
