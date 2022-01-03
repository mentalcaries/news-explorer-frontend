import { React } from 'react';
import './App.css';
import Main from '../Main/Main';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import NewsCard from '../NewsCard/NewsCard';

function App() {
  return (
    <div className="app">
      <Header/>
      <ProtectedRoute>
        {/* Saved Articles */}
      </ProtectedRoute>
      <Main></Main>
      <About/>
      <NewsCard/>
      <Footer/>
    </div>
  );
}

export default App;
