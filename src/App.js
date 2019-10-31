import React from 'react';
import './styles.css';
import Header from './components/Header/index';
// import Main from './pages/main/index';
import Routes from './routes';

function App() {
  return (
    <div className="App">
      <Header></Header>
      
      {/* <Main></Main> */}
      <Routes></Routes>
    </div>
  );
}

export default App;
