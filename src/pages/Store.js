import { ThemeProvider, Typography } from '@material-ui/core';
import React from 'react';
import { Navbar } from '../components/Navbar';
import theme from '../themeConfig'
import Caja from '../components/Caja'

function App(){
  

  return(

 <ThemeProvider theme = {theme}>

   <Navbar />
   <Caja />


 </ThemeProvider>

  )
}

export default App;