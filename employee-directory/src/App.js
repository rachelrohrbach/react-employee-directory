import './App.css';
import Header from './components/Header';
import React from 'react';
import Results from './components/Results';
import Container from './components/Container';

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <Results />
      </Container>
    </div>
  );
}

export default App;
