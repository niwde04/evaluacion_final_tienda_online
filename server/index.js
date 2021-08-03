require('./connetion.js'); // importa el archivo de conexión
const User = require('./model/user.js'); // importa el esquema
const Eventos = require('./model/events.js');
const Productos = require('./model/Productos.js');
const {
    json
} = require('express');
const cors = require('cors');

const express = require('express'),
    app = express(),
    port = 3004
app.use(express.json());


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // aqui le doy acceso a todo
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});


app.get('/crearUsuario', function (req, res) {

    User.find({}, (err, productos) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: ("Error al intentar obtener los productos. (status:500)")
            })
        } else {
            if (productos.length <= 0) {
                const user = new User({
                    usuario: 'edwin',
                    password: '1234'
                }); // crea la entidad
                user.save(); // guarda en bd

                res.status(200).json({
                    success: true,
                    message: "Usuario creado correctamente",
                    payload: productos
                })

            }
        }
    })
})


app.get('/crearProductos', function (req, res) {

    Productos.find({}, (err, productos) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: ("Error al intentar obtener los productos. (status:500)")
            })
        } else {

            if (productos.length <= 0) {



                // Function call
                Productos.insertMany([{
                        _id: 1,
                        descripcion: "Aguacate",
                        urlImagen: "aguacate",
                        precio: 14,
                        unidadesDisponibles: 50

                    }, {
                        _id: 2,
                        descripcion: "Ajo",
                        urlImagen: "ajo",
                        precio: 10,
                        unidadesDisponibles: 25

                    }, {
                        _id: 3,
                        descripcion: "Almendras",
                        urlImagen: "almendras",
                        precio: 65,
                        unidadesDisponibles: 30

                    }, {
                        _id: 4,
                        descripcion: "Arandanos",
                        urlImagen: "arandanos",
                        precio: 47,
                        unidadesDisponibles: 600

                    }, {
                        _id: 5,
                        descripcion: "Brocoli",
                        urlImagen: "brocoli",
                        precio: 36,
                        unidadesDisponibles: 56

                    }, {
                        _id: 6,
                        descripcion: "Calabaza",
                        urlImagen: "calabaza",
                        precio: 96,
                        unidadesDisponibles: 89

                    }, {
                        _id: 7,
                        descripcion: "Lychee",
                        urlImagen: "lychee",
                        precio: 54,
                        unidadesDisponibles: 200

                    }, {
                        _id: 8,
                        descripcion: "Canela",
                        urlImagen: "canela",
                        precio: 2,
                        unidadesDisponibles: 200

                    }, {
                        _id: 9,
                        descripcion: "Cebolla",
                        urlImagen: "cebolla",
                        precio: 15,
                        unidadesDisponibles: 300

                    }, {
                        _id: 10,
                        descripcion: "Fresa",
                        urlImagen: "fresa",
                        precio: 200,
                        unidadesDisponibles: 369

                    },

                    {
                        _id: 11,
                        descripcion: "Kiwi",
                        urlImagen: "kiwi",
                        precio: 47,
                        unidadesDisponibles: 85

                    }, {
                        _id: 12,
                        descripcion: "Limon",
                        urlImagen: "limon",
                        precio: 14,
                        unidadesDisponibles: 300

                    }, {
                        _id: 13,
                        descripcion: "Maiz",
                        urlImagen: "maiz",
                        precio: 58,
                        unidadesDisponibles: 250

                    }, {
                        _id: 14,
                        descripcion: "Manzana",
                        urlImagen: "manzana",
                        precio: 96,
                        unidadesDisponibles: 900

                    }, {
                        _id: 15,
                        descripcion: "Naranja",
                        urlImagen: "naranja",
                        precio: 20,
                        unidadesDisponibles: 65

                    }, {
                        _id: 16,
                        descripcion: "Papa",
                        urlImagen: "papa",
                        precio: 14,
                        unidadesDisponibles: 500

                    }, {
                        _id: 17,
                        descripcion: "Pasta",
                        urlImagen: "pasta",
                        precio: 5,
                        unidadesDisponibles: 400

                    }, {
                        _id: 18,
                        descripcion: "Pimienta",
                        urlImagen: "pimienta",
                        precio: 1,
                        unidadesDisponibles: 900

                    }, {
                        _id: 19,
                        descripcion: "Repollo",
                        urlImagen: "repollo",
                        precio: 23,
                        unidadesDisponibles: 20

                    }, {
                        _id: 20,
                        descripcion: "Tomate",
                        urlImagen: "tomate",
                        precio: 36,
                        unidadesDisponibles: 250

                    },

                    {
                        _id: 21,
                        descripcion: "Zanahoria",
                        urlImagen: "zanahoria",
                        precio: 25,
                        unidadesDisponibles: 300

                    }
                ]).then(function () {
                    res.status(200).json({
                        success: true,
                        message: "Productos creados correctamente",
                        payload: productos
                    })
                }).catch(function (error) {
                    res.status(400).json({
                        success: false,
                        message: "Error al crear los productos",
                        payload: error
                    })
                });



            } else {
                res.status(200).json({
                    success: true,
                    message: "Productos ya creados correctamente",
                    payload: productos
                })
            }
        }
    })
})



app.post('/login', function (req, res) {

    let username = req.body.usuario
    let password = req.body.password

    User.find({
        usuario: username,
        password: password
    }, function (err, userFind) {
        if (err) {
            return res.status(500).send({
                message: 'Error al intentar obtener el usuario en el inicio de sesión. (status:500)'
            })
        } else {

            if (userFind.length == 1) {

                res.status(200).json({
                    success: true,
                    message: "Login correcto",
                    username: username

                })
            } else {

                res.status(401).json({
                    success: false,
                    message: "Login incorrecto"
                })

            }
        }
    })

})


app.get('/productos', function (req, res) {

    Productos.find({}).then(function (productos) {

        res.status(200).json({
            success: true,
            message: "Productos encontrados",
            payload: productos
        })


    });
});

app.get('/buscarProducto/', function (req, res) {

    const descripcionString = req.query;
    console.log(descripcionString)
    const descripcionJson = (descripcionString)

    Productos.find({

        descripcion: {
            $regex: new RegExp(".*" + descripcionJson.descripcion, "i")
        }

    }).then(function (events) {
        console.log(events)
        res.send(events);
    });
});


app.get('/buscarProductoId/', function (req, res) {

    const descripcionString = req.query;
    console.log(descripcionString)
    const descripcionJson = (descripcionString)

    Productos.find({

        _id: descripcionJson._id

    }).then(function (events) {
        console.log(events)
        res.send(events);
    });
});




app.post('/eventos', function (req, res) {

    let title = req.body.title
    let start = req.body.start
    let end = req.body.end
    try {
        const eventos = new Eventos({

            title: title,
            start: start,
            end: end,
            username: 'edwin'

        });
        eventos.save();
    } catch (err) {

        res.status(400).json({
            success: false,
            message: err.message
        })
    }

    res.status(200).json({
        success: true,
        message: "Evento ingresado con exito"
    })

})

app.get('/eventList/:id', function (req, res) {

    const userNameString = req.params.id;
    const userNameJson = (userNameString)

    console.log(JSON.stringify(userNameJson))

    Eventos.find({
        username: userNameJson
    }).then(function (events) {
        res.send(events);
    });
});

app.put('/eventUpdate/:id', async function (req, res) {

    try {
        const eventoUpdate = await Eventos.updateOne({
            _id: req.params.id
        }, {
            title: req.body.title,
            start: req.body.start,
            end: req.body.end
        });

        res.status(200).json({
            success: true,
            message: "Evento actualizado"
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }

});

app.delete('/deleteEvent/:id', function (req, res) {

    Eventos.deleteOne({
        _id: req.params.id
    }, function (err) {
        if (err) {

            res.status(400).json({
                success: false,
                message: err.messageda
            })
        } else {
            res.status(200).json({
                success: true,
                message: "Evento Eliminado"
            })
        }
    });

})




app.listen(port, function () {
    console.log('Servidor corriendo en http://localhost:' + port)
})