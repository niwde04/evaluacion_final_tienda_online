import React from 'react'
import img from '../../src/imagenes.js'
import { Box, Grid, Typography } from '@material-ui/core'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import axios from 'axios';
const useStyles = makeStyles((theme) => ({

    root: {
        flexGrow: 1,
    },

    img: {
        display: 'block',
        width: '50%'

    },

    paper: {

        margin: 10,
        padding: theme.spacing(1)

    },

    paper2: {


        padding: theme.spacing(1)

    }

}))



const Carrito = (a) => {

    const classes = useStyles();

    React.useEffect(() => {
        console.log("Use Effect")
        setArrayCarrito(a.carrito)


    }, []); // hasta que se carga toda la pagina se ejecuta esto


    const baseUrlUpdateQuantity = "http://localhost:3004/productUpdate/"


    let total = 0
    const [arrayCarrito, setArrayCarrito] = React.useState([])


    {
        arrayCarrito.map(item => (

            total += (item.pedidos * item.precio)
        ))
    }

      function  preUpdate(){


        arrayCarrito.map(async (item) =>  (

           await   updateProduct(item)

        ))

       
        window.alert("Gracias por su compra!");

         a.cerrar()
    }

    async function updateProduct(e) {


        const response = await axios.put(baseUrlUpdateQuantity,
            {
                params: {
                    payload: e
                }
            })


    }

    return (

        <div className={classes.root}>

            <Grid container  >

                <Grid xs={6}>

                    {arrayCarrito.map(item => (

                        <Grid>

                            <Paper className={classes.paper} color='primary.main'   >


                                <img src={img[item.urlImagen]} className={classes.img} alt="" />
                                <h3 >Descripcion:  {item.descripcion}</h3>
                                <strong>Precio:</strong>  {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'LPS' }).format(item.precio)} <br />
                                <strong>Unidades:</strong> {item.pedidos} <br />
                                <strong>Total:</strong> {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'LPS' }).format(item.precio * item.pedidos)}

                            </Paper>

                        </Grid>
                    ))
                    }

                </Grid>

                <Grid item xs={6} className={classes.paper2}>

                    <Box className={classes.paper}>
                        <h1>Total a Pagar</h1>
                        {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'LPS' }).format(total)}


                        <br />

                        <Button
                            color="primary"
                            onClick={() => preUpdate()}>
                            Pagar
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default Carrito
