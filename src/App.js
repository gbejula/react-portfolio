import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import Portfolio from './screens/Portfolio';
import Contact from './screens/Contact';
import About from './screens/About';

const App = () => {
  return (
    <Router className='App'>
      <Header />
      <main>
        <Container>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/contact' component={Contact} />
          <Route path='/about' component={About} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
