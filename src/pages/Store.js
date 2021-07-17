import { ThemeProvider, Typography } from '@material-ui/core';
import React from 'react';
import { Navbar } from '../components/Navbar';
import theme from '../themeConfig'
import Caja from '../components/Caja'
import '../css/Login.css';
import axios from 'axios';
const baseUrl = "http://localhost:3004/productos"


function App(){

  axios.get(baseUrl)
  .then(function (response) {
    // handle success
    console.log(response);

  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
 
  

  return(
<div id= 'mainStore'>
 <ThemeProvider  theme = {theme} >

   <Navbar />
   <Caja />


 </ThemeProvider>

 </div>

  )
}

export default App;