import React from 'react'
import { AppBar, Toolbar, Typography, makeStyles, IconButton } from '@material-ui/core'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Badge from '@material-ui/core/Badge';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import Carrito from './Carrito';



const useStyles = makeStyles(theme => ({
    offset: theme.mixins.toolbar,
    menuButton: {
        marginRight: theme.spacing(0),
        color: '#ffffff',

    },
    title: {
        flexGrow: 1
    }
}))

export const Navbar = (props) => {
    
    const clasess = useStyles()
    const [open, setOpen] = React.useState(false);
    
    let setCantidad = props.cantidad
    const handleClickOpen = async (id) => {

        //await response(id);
        setOpen(true);

    };

    const handleClose = () => {
        setOpen(false);
       // props.updateProducts("")
        window.location.reload();
        
       
    };

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    <Typography variant="h6" color="initial">
                        Carrito de compras
                    </Typography>
                </DialogTitle>
                <DialogContent>
                    <Carrito

                        carrito = {props.carrito}
                        cerrar  = {handleClose}

                    />
                    <DialogContentText id="alert-dialog-description">
                        <Typography variant="h4" color="initial">

                        </Typography>
                    </DialogContentText>

                </DialogContent>
                <DialogActions>

                    <Button onClick={handleClose} color="secondary">
                        Cancelar
                    </Button>

                </DialogActions>
            </Dialog>


            <AppBar position="fixed" color="primary" mb={2}>
                <Toolbar>
                    <Typography variant="h6" className={clasess.title}>
                        Tienda de productos
                    </Typography>
                    <IconButton
                        aria-label="menu"
                        //className={clasess.menuButton}
                        onClick={() => 
                            
                            setCantidad > 0 ?  handleClickOpen() : alert("Favor ingresar un producto")
                        
                        }
                        
                    >

                        <Badge badgeContent={setCantidad} color="secondary">

                            <ShoppingCartIcon />

                        </Badge>
                    </IconButton>


                   
                    <IconButton aria-label="menu" className={clasess.menuButton} 
                    
                    onClick={() => 
                            
                        window.location.href='./'
                    
                    }
                    
                    >

                        <ExitToAppIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <div className={clasess.offset}></div>

        </div>
    )
}
export default Navbar