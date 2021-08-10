import React, { Component } from 'react';
import {Grid,Paper,Avatar,TextField} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Button from '@material-ui/core/Button';
import '../css/Login.css';
import axios from 'axios';
import Cookies from 'universal-cookie';
import background from '../images/login-fondo.jpg'
const baseUrl = "http://localhost:3004/Login"
const cookies = new Cookies();

const divStyle = {
  
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position: "absolute",
    height: "97vh",
    width: "97vw",
    backgroundPosition: "center" 
  };

  




class Login extends Component {

    state = {
        form: {
            username: '',
            password: ''
        }
    }

    handleChange = async e => {
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
        // console.log(this.state.form)
    }

    

    crearUsuario = async() =>{

        await axios.get("http://localhost:3004/crearUsuario")
        .then((response) => {
            console.log(response)
        })
        .catch(error => {
            
            console.log(error)
        })

        this.crearProducto()
        

    }

    crearProducto = async() =>{

        await axios.get("http://localhost:3004/crearProductos")

        .then((response) => {
            console.log(response)
        })
        .catch(error => {
            
            console.log(error)
        })

        this.login()

    }

    login = async () => {

        await axios.post(baseUrl, { usuario: this.state.form.username, password: this.state.form.password })
            .then((response) => {
                let userName = response.data.username;

                cookies.set('username', userName, { path: "/" })
                alert(`Bienvenido ${userName}`)
                window.location.href='./store'
            })
            .catch(error => {
                alert('Usuario o contraseña incorrecta')
                console.log(error)
            })
    }

    render() {
        const avatarStyle ={backgroundColor:'#1bbd7e'}
        return (

            <body style={divStyle}>
                <Grid>
                    <Paper id="paperLogin" elevation={10}>
                        <Grid align='center'>
                            <Avatar style={avatarStyle}> <LockOutlinedIcon/></Avatar>
                            <h2>Sing in</h2>
                        </Grid>
                        <TextField name='username'label='Usuario' placeholder='Ingrese usuario' fullWidth required onChange={this.handleChange}></TextField>
                        <TextField name='password'label='Contraseña' placeholder='Ingrese Contraseña' type='password' fullWidth required onChange={this.handleChange}></TextField>
                        
                        <Button style={{marginTop:20}} type='submit' color='primary' fullWidth variant='contained' onClick={() => this.crearUsuario()}>Ingresar</Button>
                        
                        <p>Usuario: edwin</p>
                        <p>Password: 1234</p>
                    
                    </Paper>
                </Grid>
            </body>
        )
    }
}

export default Login;