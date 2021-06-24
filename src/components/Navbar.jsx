import React from 'react'
import { AppBar, Toolbar, Typography, makeStyles, IconButton } from '@material-ui/core'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Badge from '@material-ui/core/Badge';

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

export const Navbar = () => {
    const clasess = useStyles()
    return (
        <div>
            <AppBar position="fixed" color="primary" mb={2}>
                <Toolbar>
                    <Typography variant="h6" className={clasess.title}>
                        Tienda de productos
                    </Typography>
                    <IconButton aria-label="menu" className={clasess.menuButton} >

                    <Badge badgeContent={1} color="secondary">
                    <ShoppingCartIcon />
                    </Badge>
                    </IconButton>
                    <IconButton aria-label="menu" className={clasess.menuButton} >
                        <ExitToAppIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <div className={clasess.offset}></div>
 
            </div>
    )
}
