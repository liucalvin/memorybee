import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LoginPage from './pages/LoginPage';
import StartPage from './pages/StartPage';
import RegistrationPage from './pages/RegistrationPage';
import HomePage from './pages/HomePage';
import PrivateRoute from './components/PrivateRoute';
import StudyPage from './pages/StudyPage';
import WordsPage from './pages/WordsPage';
import AddWordPage from './pages/AddWordPage';
import SettingsPage from './pages/SettingsPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Switch>
          <Route path='/' exact component={StartPage} />
          <Route path='/login' exact component={LoginPage} />
          <Route path='/register' exact component={RegistrationPage} />
          <PrivateRoute path='/home' exact component={HomePage} />
          <PrivateRoute path='/study' exact component={StudyPage} />
          <PrivateRoute path='/words' exact component={WordsPage} />
          <PrivateRoute path='/words/add' exact component={AddWordPage} />
          <PrivateRoute path='/settings' exact component={SettingsPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
