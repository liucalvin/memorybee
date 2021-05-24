import { Flex } from '@chakra-ui/layout'
import React, { useState } from 'react'

function AddWordPage() {
  
  const [wordToAdd, setWordToAdd] = useState('');
  const handleSubmitWord = (word) => {
    alert(word)
  }

  return (
    <Flex>
      Add a new word
       {/* <Text fontSize='md' color='gray.500' p={2} mr={4} >
          Add a word
        </Text> */}
          {/* <FormControl p={6} justifyContent='center'>
          <FormLabel float='left' p={1} mr={4} >Add a word</FormLabel>
          <Input float='right' width='md' onChange={(event) => setWordToAdd(event.target.value)} />
        </FormControl>
        <Button float='left' p={1} mr={4} >Add a word</Button> */}
    </Flex>
  )
}

export default AddWordPage
