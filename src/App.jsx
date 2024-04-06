import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import RecipeSection from './Components/RecipeSection/RecipeSection';
import Banner from './Components/banner/banner';
import Header from './Components/header/Header';
import RegisterForm from './Components/RegisterForm/RegisterForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <div className='w-4/5 mx-auto'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegisterForm />} />
        </Routes>
        <ToastContainer />
      </div>
    </Router>
  );
}

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <RecipeSection />
    </>
  );
}

export default App;
