import React from 'react';
import './App.css';

import Navbar from './components/navBar/NavBar';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './paginas/login/Login';
<<<<<<< HEAD

import Home from './paginas/home/Home';
import { AuthProvider } from './contexts/AuthContext';
import ListaTemas from './components/temas/listaTemas/ListaTemas';
=======
import Cadastro from './paginas/cadastro/Cadastro';
import Home from './paginas/home/Home';
import { AuthProvider } from './contexts/AuthContext';
>>>>>>> ed493411d1131ddde43f8df752c2a6ea0ffb78df


function App() {
  return (
    <>
    <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
<<<<<<< HEAD
        
              <Route path="/home" element={<Home />} />
              <Route path="/temas" element={<ListaTemas />} />
=======
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/home" element={<Home />} />
>>>>>>> ed493411d1131ddde43f8df752c2a6ea0ffb78df
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
        </AuthProvider>
    </>
  );
}
export default App;