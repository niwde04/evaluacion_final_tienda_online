import React, { Component } from 'react';
import '../css/Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Cookies from 'universal-cookie';
const baseUrl = "http://localhost:3001/Login"
const cookies = new Cookies();


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
        return (

            <div className="mainContainer">
                <div className="secondContainer">
                    <div className="form-group">
                        <label>Usuario: </label>
                        <br />
                        <input
                            type="text"
                            className="form-control"
                            name="username"
                            onChange={this.handleChange}
                        />
                        <br />
                        <label>Password: </label>
                        <br />
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            onChange={this.handleChange}
                        />
                        <br />
                        <button className="btn btn-primary" onClick={() => this.login()}>Iniciar Sesion </button>


                    </div>


                </div>


            </div>

        )
    }
}

export default Login;