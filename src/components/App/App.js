import { React } from 'react';
import './App.css';
import Main from '../Main/Main';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

function App() {
  return (
    <div className="app">
      <Header></Header>
      {/* add protected Route here */}
      <Main></Main>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
