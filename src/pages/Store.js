import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import { Navbar } from '../components/Navbar';
import theme from '../themeConfig'
import Caja from '../components/Caja'
import '../css/Login.css';
import background from '../images/main-fondo.jpg'


function App(){

  return(

    
<div id= 'mainStore' 
style=

{{  
  backgroundImage: `url(${background})`,
  backgroundSize: "cover",
  backgroundPosition : "center",
  width: "100%",
  height: "100vh ",
  backgroundRepeat: "no-repeat"
}}

>
 <ThemeProvider  theme = {theme} >

  
   <Caja />


 </ThemeProvider>

 </div>

  )
}

export default App;