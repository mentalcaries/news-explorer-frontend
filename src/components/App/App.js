import { React } from 'react';
import './App.css';
import Search from '../SearchForm/Search';
import Main from '../Main/Main';
import About from '../About/About';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="app">
      <Main></Main>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
