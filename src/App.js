import './App.css';
import Header from './components/Header';
import React from 'react';
import Main from './components/Main';
import Container from './components/Container';

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <Main />
      </Container>
    </div>
  );
}

export default App;
