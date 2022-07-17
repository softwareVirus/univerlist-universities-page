import React, { useEffect,useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import { useMediaQuery } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme'
import Main from './components/Main';
import axios from 'axios'
import BottomNavigation from './components/BottomNavigation';

function App() {
  const width = useMediaQuery('(max-width: 764px)')
  return (
    <div>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header />  
          <Routes>
            <Route path='/' element={<Main />} />
          </Routes>
          {
            width
            &&
            <BottomNavigation />
          }
        </BrowserRouter>
      </ThemeProvider>
      
    </div>
  );
}



export default App;
