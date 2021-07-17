import {createMuiTheme} from '@material-ui/core/styles'
import background from "./images/main-fondo.jpg";


const theme = createMuiTheme({

    backgroundImage:  "url(" + background + ")"
  

})

export default theme;