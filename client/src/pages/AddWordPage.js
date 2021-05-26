import { Flex } from '@chakra-ui/layout'
import { Box, Button, FormControl, FormLabel, Heading, Input, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { addWord } from '../actions/storage';
import Navbar from '../components/Navbar';

function AddWordPage() {

  const [word, setWord] = useState();
  const onSubmitWord = async () => {
    const res = await addWord(word)
    if (res.status) {
      if (res.status === 200) {
        alert("Word successfully added");
      }
    } else {
      alert(res);
    }
    console.log(res);
  }

  // useEffect(() => {
  //   console.log(word);
  // }, [word])

  return (
    <>
      <Navbar />
      <Flex margin='auto' w='60%'>
        <Flex mt={8} display='inline-block' alignItems='top' justifyContent='center'>
          <Box mb={6}>
            <Heading>Add a New Word</Heading>
          </Box>
          <Box mb={4} float='left'>
            <FormControl p={6} justifyContent='center'>
              <FormLabel float='left' p={1} mr={4} >Add a word</FormLabel>
              <Input float='right' width='sm' onChange={(e) => setWord(e.target.value)} />
            </FormControl>
          </Box>
          <Box p={4} m={4} float='right'>
            <Button p={6} mr={8} >
              Preview Flashcard
            </Button>
            <Button p={6} onClick={onSubmitWord}>
              Add Word
            </Button>
          </Box>
        </Flex>
      </Flex>
    </>
  )
}

export default AddWordPage
