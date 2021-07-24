import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import { Navbar } from '../components/Navbar';
import theme from '../themeConfig'
import Caja from '../components/Caja'
import '../css/Login.css';
import background from '../images/main-fondo.jpg'


function App(){

  return(
<div id= 'mainStore' style={{  backgroundImage: `url(${background})` }}>
 <ThemeProvider  theme = {theme} >

   <Navbar />
   <Caja />


 </ThemeProvider>

 </div>

  )
}

export default App;