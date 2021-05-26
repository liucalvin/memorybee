import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <>
      <Box p={8}>
        <Text fontSize='md'>
          That page doesn't exist.
          <Box display='inline' pl={1} color='orange.500'>
            <Link to='/'>
              Back to Home
            </Link>
          </Box>
        </Text>
      </Box>

    </>
  )
}

export default NotFoundPage
