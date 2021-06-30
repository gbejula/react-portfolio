import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import Portfolio from './screens/Portfolio';

const App = () => {
  return (
    <Router className='App'>
      <Header />
      <main>
        <Container>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/portfolio' component={Portfolio} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
