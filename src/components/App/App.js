import { React } from 'react';
import './App.css';
import Search from '../SearchForm/Search';
import Main from '../Main/Main';
import About from '../About/About';

function App() {
  return (
    <div className="app">
      <Main></Main>
      <About/>
    </div>
  );
}

export default App;
