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



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: '90vh',
      width: '90vw',
      padding: 10,
      overflow: 'auto' // agrega scroll al paper
    },
    control: {
      padding: theme.spacing(2),
    },

    cardRoot: {
        marginTop: 20,
        maxWidth: '30%',
        marginRight: 20,
      },

    cardMedia: {
        height: 0,
        paddingTop: '56.25%', // 16:9
        
        
      }

  }));



const Caja = () => {
    const classes = useStyles();
    return (
        <div>
            <Grid container >

                <Grid item xs={12}  
           
                >

                
                    <Grid item xs={6}>
                        <Box color='primary.main' border={1} >
                            <Typography variant="h6" color="initial">
                                Catalogo de Productos
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={6}>
                        <Box color='primary.main' border={1} >

                            <Typography variant="h8" color="initial">
                                Que estas Buscando
                            </Typography>

                            <Box color='primary.main' border={1} mr={0}>
                                Buscar
                            </Box>

                        </Box>


                    </Grid>

                    <Card className={classes.cardRoot}>

                    <CardMedia
            
                        className={classes.cardMedia}
                        
                        
                        image= "https://images-na.ssl-images-amazon.com/images/I/71UHPH8dmcL._AC_SX425_.jpg"
                        title="Aguacate"
                    />
                    <CardContent>
                            <Typography variant="h6" color="textSecondary" component="p">
                            Aguacate
                            </Typography>

                            <Typography variant="h6" color="textSecondary" component="p">
                            Precio : $5
                            </Typography>
                            
                            <Typography variant="body2" color="textSecondary" component="p">
                            Unidades disponibles: 6
                            </Typography>

                        </CardContent>
                   

                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                        <ShareIcon />
                        </IconButton>
                     
                    </CardActions>

                </Card>

                <Card className={classes.cardRoot}>

                <CardMedia

                    className={classes.cardMedia}
                    
                    
                    image= "https://as01.epimg.net/deporteyvida/imagenes/2017/10/19/portada/1508433079_059048_1508433225_noticia_normal.jpg"
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
                    <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                    <ShareIcon />
                    </IconButton>
                
                </CardActions>

                </Card>

              

                 

          
                  

                </Grid>

            </Grid>


        </div>
    )
}

export default Caja
