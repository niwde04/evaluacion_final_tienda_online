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

import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';



import img from '../../src/imagenes.js'





const useStyles = makeStyles((theme) => ({


    cardRoot: {
        marginTop: 20,
        maxWidth: '100%',
        marginRight: 20,
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
        margin: 20,
        width: "80%"
    },

    flexcolscroll: {

        flexGrow: 1,
        overflow: 'auto',
        minHeight: '100%'


    }

}));


const Caja = () => {

    const baseUrl = "http://localhost:3004/productos"
    const baseUrlFindProducto = "http://localhost:3004/buscarProducto/"


    const classes = useStyles();


    const [productos, setProductos] = React.useState([])

    React.useEffect(() => {
        console.log("Use Effect")
        buscarProductos("")

    }, []);



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



    function SimpleDialog(props) {
        const classes = useStyles();
        const { onClose, selectedValue, open } = props;

        const handleClose = () => {
            onClose(selectedValue);
        };



        return (
            <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
                <DialogTitle id="simple-dialog-title">Mas informacion de la manzana</DialogTitle>
                <h1>HOla</h1>
            </Dialog>
        );
    }


    const [open, setOpen] = React.useState(false);


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);

    };



    return (
        <div>
            <Paper className={classes.paper} >
                <Grid container >
                    <Grid item xs={8}>
                        <Box color='primary.main'  >
                            <Typography variant="h6" color="initial">
                                <h1>Catalogo de Productos</h1>
                            </Typography>
                        </Box>

                    </Grid>

                    <Grid item xs={4}>
                        <Box color='primary.main'  >

                            <Typography variant="h6" color="initial">
                                <h3>Que estas buscando?</h3>
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

                    <Grid container className={classes.flexcolscroll} style={{ height: '60vh', width: '100%' }} >

                        {

                            productos.map(item => (



                                <Grid item xs={6} sm={4} lg={3}>

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
                                                    <Button size="small" variant="contained" color="primary" onClick={handleClickOpen}>
                                                        Ver mas
                                                    </Button>

                                                    <SimpleDialog open={open} onClose={handleClose} />

                                                    <Button size="small" variant="contained" color="primary">
                                                        Añadir
                                                    </Button>

                                                    <TextField

                                                        id="standard-number"
                                                        label=""
                                                        type="number"
                                                        InputLabelProps={{ shrink: true }}
                                                        InputProps={{ inputProps: { min: "1", max: "99", step: "1" } }}

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
