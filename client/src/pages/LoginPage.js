import { Button } from '@chakra-ui/button'
import { FormControl, FormLabel } from '@chakra-ui/form-control'
import { Input } from '@chakra-ui/input'
import { Box, Flex, Heading, Text } from '@chakra-ui/layout'
import { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { startLogin, useAuth } from '../actions/authentication';

function LoginPage() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const location = useLocation();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await startLogin(email, password);
    if (!response.token) {
      alert('Email/password incorrect.');
    } else {
      localStorage.setItem('token', response.token);
      localStorage.setItem('userId', response.id);

      let { from } = location.state || { from: { pathname: "/home" } };
      history.replace(from);
    }
  }

  return (
    <Flex height='100vh' alignItems='center' justifyContent='center'>
      <Box p={8} background='gray.100' maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg">
        <Heading mb={6} textAlign='center'>
          Log In
          </Heading>
        <form onSubmit={handleSubmit}>
          <FormControl isRequired='true'>
            <FormLabel>Email</FormLabel>
            <Input placeholder='name@example.com' mb={2} type='email' onChange={(event) => setEmail(event.target.value)} />
          </FormControl>
          <FormControl isRequired='true'>
            <FormLabel>Password</FormLabel>
            <Input placeholder='********' mb={2} type='password' onChange={(event) => setPassword(event.target.value)} />
          </FormControl>
          <Button colorScheme='orange' width='full' type='submit'>Log In</Button>
        </form>
        <Text fontSize='sm' pl={6} pr={6} pt={6}>
          Need an account?
          <Box display='inline' pl={1} color='orange.500'>
            <Link to='/register'>
              Register
          </Link>
          </Box>
        </Text>
      </Box>
    </Flex>
  )
}

export default LoginPage
