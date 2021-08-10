import React from 'react'
import { Box, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import VerMas from "../components/VerMas";
import Navbar from "../components/Navbar";





import img from '../../src/imagenes.js'






const useStyles = makeStyles((theme) => ({


    cardRoot: {
        marginTop: 20,
        maxWidth: '100%',
        marginRight: 20
    },

    cardMedia: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },

    textBoxBuscar: {
        '& > *': {
            margin: theme.spacing(1),
            flexGrow: 1

        }
    },

    formCard: {
        '& > *': {
            margin: theme.spacing(0.5),
            fontSize: 10,
            flexGrow: 1,
            position: "relative",

        },
    },

    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,        
        margin: "auto",
        width: "90%" 
     
      
    },

    flexcolscroll: {

        flexGrow: 1,
        overflow: 'auto',
        minHeight: '100%'


    }

}));


const Caja = () => {


    const baseUrlFindProducto = "http://localhost:3004/buscarProducto/"
    const baseUrlFindProductoId = "http://localhost:3004/buscarProductoId/"

    const classes = useStyles();


    const [productos, setProductos] = React.useState([])
    const [productosVerMas, setProductosVerMas] = React.useState([])
    const [open, setOpen] = React.useState(false);
    const [productoCarrito, setProductoCarrito] = React.useState([]);
    const [cantidadProducto, setCantidadProducto] = React.useState(1);
    const [cantidadCarrito, setCantidadCarrito] = React.useState(0);

    React.useEffect(() => {
        console.log("Use Effect")
        buscarProductos("")

    }, []);



    const agregarCarrito = async (e) => {
        // e.preventDefault()

        const mappingProducto = {
            _id: e._id,
            descripcion: e.descripcion,
            urlImagen: e.urlImagen,
            precio: e.precio,
            pedidos: cantidadProducto,
            unidadesDisponibles: e.unidadesDisponibles,
            nuevaDisponibilidad: e.unidadesDisponibles - cantidadProducto,
            __v: 0

        }

        await setProductoCarrito([mappingProducto])

        setProductoCarrito([
            ...productoCarrito,
            mappingProducto
        ])


        setCantidadCarrito(productoCarrito.length + 1)


    }

    const buscarProductos = async (e) => {

        await

            axios.get(baseUrlFindProducto,
                {
                    params: {
                        descripcion: e
                    }
                })
                .then(function (response) {
                    // handle success
                    //console.log(response);

                    const productosData = response.data

                    setProductos(productosData)
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
    }


    async function response(e) {
        const response = await axios.get(baseUrlFindProductoId,
            {
                params: {
                    _id: e
                }
            })


        setProductosVerMas(response.data)
        console.log(response.data)
    }


    const handleClickOpen = async (id) => {

        await response(id);
        setOpen(true);

    };

    const handleClose = () => {
        setOpen(false);
    };



    return (
        <div >
            <Navbar
                cantidad={cantidadCarrito}
                carrito={productoCarrito}
                updateProducts = {buscarProductos}
            />

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">

                </DialogTitle>
                <DialogContent>

                    <DialogContentText id="alert-dialog-description">
                        <Typography variant="h4" color="initial">
                            {(productosVerMas[0]?.descripcion)}

                        </Typography>

                        <VerMas

                            urlImagen={(productosVerMas[0]?.urlImagen)}
                            precio={(productosVerMas[0]?.precio)}
                            unidades={(productosVerMas[0]?.unidadesDisponibles)}

                        />

                    </DialogContentText>

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Atras
                    </Button>

                </DialogActions>
            </Dialog>

            <Paper className={classes.paper}  >
                <Grid container >
                    <Grid item xs={8}>
                        <Box color='primary.main'  >
                            <Typography variant="h3" color="initial">
                                Catalogo de Productos
                            </Typography>
                        </Box>

                    </Grid>

                    <Grid item xs={4}>
                        <Box color='primary.main'  >

                            <Typography variant="h6" color="initial">
                                Que estas buscando?
                            </Typography>

                            <Box color='primary.main' mr={0}>
                                <form className={classes.textBoxBuscar} noValidate autoComplete="off">

                                    <TextField

                                        id="outlined-basic"
                                        label=""
                                        variant="outlined"
                                        onChange={e =>
                                            buscarProductos(e.target.value)
                                        }

                                    />

                                </form>
                            </Box>

                        </Box>

                    </Grid>

                    <Grid container className={classes.flexcolscroll} style={{ height: '70vh', width: '100%' }} >

                        {

                            productos.map(item => (

                                <Grid item lg={2} md={4} sm={6} xs ={12}>

                                    <Card className={classes.cardRoot}>

                                        <CardMedia

                                            className={classes.cardMedia}
                                            image={img[item.urlImagen]}
                                            title={item.descripcion}

                                        />
                                        <CardContent>
                                            <Typography variant="h6" color="textSecondary" component="p">
                                                {item.descripcion}
                                            </Typography>

                                            <Typography variant="h6" color="textSecondary" component="p">
                                                Precio L. {item.precio}.00
                                            </Typography>

                                            <Typography variant="body2" color="textSecondary" component="p">
                                                Unidades disponibles: {item.unidadesDisponibles}
                                            </Typography>

                                        </CardContent>
                                        <CardActions disableSpacing>

                                            <form noValidate autoComplete="off">

                                                <div className={classes.formCard}>
                                                    <Button size="small" variant="contained" color="primary"

                                                        onClick={() => handleClickOpen(item._id)}>
                                                        Ver mas
                                                    </Button>

                                                    <Button size="small" variant="contained" color="primary"

                                                        onClick={() => agregarCarrito(item)}>

                                                        Añadir

                                                    </Button>

                                                    <TextField

                                                        id="standard-number"

                                                        type="number"
                                                        InputLabelProps={{ shrink: true }}
                                                        onChange={e => setCantidadProducto(e.target.value)}
                                                        defaultValue={1}
                                                        InputProps={{ inputProps: { min: "0", max: "99", step: "1" } }}


                                                    />
                                                </div>
                                            </form>
                                        </CardActions>
                                    </Card>
                                </Grid>

                            ))
                        }

                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}

export default Caja
