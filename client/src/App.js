import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LoginPage from './pages/LoginPage';
import StartPage from './pages/StartPage';
import RegistrationPage from './pages/RegistrationPage';
import HomePage from './pages/HomePage';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Switch>
          <Route path='/' exact component={StartPage} />
          <Route path='/login' exact component={LoginPage} />
          <Route path='/register' exact component={RegistrationPage} />
          <PrivateRoute path='/home'>
            <HomePage />
          </PrivateRoute>
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
