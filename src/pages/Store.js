import React, { Component } from 'react';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

class componentName extends Component {
    render () {
        console.log(cookies.get('username'))
        return (
            <div>
                <h1>La tienda mamada</h1>
            </div>
        )
    }
}

export default componentName