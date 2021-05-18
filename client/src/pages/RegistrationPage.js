import { Button } from '@chakra-ui/button'
import { FormControl, FormLabel } from '@chakra-ui/form-control'
import { Input } from '@chakra-ui/input'
import { Box, Flex, Heading, Text } from '@chakra-ui/layout'
import { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { startRegistration } from '../actions/authentication';

function RegistrationPage() {

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const location = useLocation();

  const HandleSubmit = async (event) => {
    event.preventDefault();
    const response = await startRegistration(email, username, password);
    if (!response[0].email) {
      alert('A user with that email already exists.');
    } else {
      console.log(response);

      let { from } = location.state || { from: { pathname: "/login" } };
      history.replace(from);
      alert('Successfully registered!');
    }
  }

  return (
    <Flex height='100vh' alignItems='center' justifyContent='center'>
      <Box p={8} background='gray.100' maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg">
        <Heading mb={6} textAlign='center'>
          Register
          </Heading>
        <form onSubmit={HandleSubmit}>
          <FormControl isRequired='true'>
            <FormLabel>Email</FormLabel>
            <Input placeholder='name@example.com' mb={2} type='email' onChange={(event) => setEmail(event.target.value)} />
          </FormControl>
          <FormControl isRequired='true'>
            <FormLabel>Username</FormLabel>
            <Input placeholder='your-cool-name' mb={2} type='' onChange={(event) => setUsername(event.target.value)} />
          </FormControl>
          <FormControl isRequired='true'>
            <FormLabel>Password</FormLabel>
            <Input placeholder='********' mb={2} type='password' onChange={(event) => setPassword(event.target.value)} />
          </FormControl>
          <Button colorScheme='orange' width='full' type='submit'>Register</Button>
        </form>
        <Text fontSize='sm' pl={6} pr={6} pt={6}>
          Already have an account?
          <Box display='inline' pl={1} color='orange.500'>
            <Link to='/login'>
              Login
          </Link>
          </Box>
        </Text>
      </Box>
    </Flex>
  )
}

export default RegistrationPage
