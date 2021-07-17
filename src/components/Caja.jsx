import React from 'react'
import { Box, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


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
        margin: 20
    },

}));


const Caja = () => {
    const classes = useStyles();
    return (
        <div >

            <Paper className={classes.paper}>

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

                            <Typography variant="h8" color="initial">
                                <h3>Que estas buscando?</h3>
                            </Typography>

                            <Box color='primary.main'  mr={0}>
                                <form className={classes.textBoxBuscar} noValidate autoComplete="off">

                                    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                                </form>
                            </Box>

                        </Box>

                    </Grid>

               
                    <Grid item xs={6} sm={4} lg={3}>
                        <Card className={classes.cardRoot}>

                            <CardMedia

                                className={classes.cardMedia}


                                image="https://as01.epimg.net/deporteyvida/imagenes/2017/10/19/portada/1508433079_059048_1508433225_noticia_normal.jpg"
                                title="Ajo"
                            />
                            <CardContent>
                                <Typography variant="h6" color="textSecondary" component="p">
                                    Ajo
                                </Typography>

                                <Typography variant="h6" color="textSecondary" component="p">
                                    Precio : $1
                                </Typography>

                                <Typography variant="body2" color="textSecondary" component="p">
                                    Unidades disponibles: 60
                                </Typography>

                            </CardContent>


                            <CardActions disableSpacing>



                                <form noValidate autoComplete="off">

                                    <div className={classes.formCard}>
                                        <Button size="small" variant="contained" color="primary">
                                            Ver mas
                                        </Button>

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

                </Grid>
            </Paper>
        </div>
    )
}

export default Caja
