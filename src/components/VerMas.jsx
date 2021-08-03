import React from 'react'
import img from '../../src/imagenes.js'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({


    img: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '50%'
        
    }

}))

const VerMas = (props) => {

    const classes = useStyles();


    return (
        <div  >
            <img className={classes.img}  src={img[props.urlImagen]} />
            <div className="media-body">
               
               
               <p>{'precio: ' + props.precio}</p>
               <p>{'Unidades disponibles: ' + props.unidades}</p>

            </div>
        </div>
    )
}

export default VerMas
