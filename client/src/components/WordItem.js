import { Box, List, ListIcon, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import React from 'react'

function WordItem({ word }) {
  return (
    <>
      <Box m={4} p={8} borderRadius={4} bg='gray.100'>
        <Text textTransform='capitalize' fontSize='2xl' mb={2}>{word.word}</Text>
        <Text fontSize='lg' mb={2}>Definitions: </Text>
        <UnorderedList>
          {word.definition.map(definition => (
            <>
              <ListItem key={definition.toString()}>{JSON.parse(definition).definition}</ListItem>
            </>
          ))}
        </UnorderedList>
        <UnorderedList>
          {word.examples.map(example => (
            <>
              <ListItem key={example.toString()}>{JSON.parse(example).example}</ListItem>
            </>
          ))}
        </UnorderedList>
      </Box>
    </>
  )
}

export default WordItem
