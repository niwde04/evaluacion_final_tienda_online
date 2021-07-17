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
                            urlImagen: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcienciaybiologia.com%2Faguacate-salvado-de-su-destino%2F&psig=AOvVaw28_7v0dp5JrkqbQaqSZjFm&ust=1626554839988000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKigzI676PECFQAAAAAdAAAAABAD",
                            precio: 14,
                            unidadesDisponibles: 50

                        }, {
                            _id: 2,
                            descripcion: "Ajo",
                            urlImagen: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fe00-elmundo.uecdn.es%2Fassets%2Fmultimedia%2Fimagenes%2F2018%2F10%2F03%2F15385788043643.jpg&imgrefurl=https%3A%2F%2Fwww.elmundo.es%2Fvida-sana%2Fsexo%2F2018%2F10%2F05%2F5bb4dc3422601d13178b457a.html&tbnid=qb4jeaZw4hTPoM&vet=12ahUKEwjYy_bcvejxAhUN61MKHRwWC44QMygAegQIARB4..i&docid=zeOLqQwVW98QgM&w=1024&h=870&q=ajo&ved=2ahUKEwjYy_bcvejxAhUN61MKHRwWC44QMygAegQIARB4",
                            precio: 10,
                            unidadesDisponibles: 25

                        }, {
                            _id: 3,
                            descripcion: "Almendras",
                            urlImagen: "https://www.google.com/url?sa=i&url=https%3A%2F%2Felpoderdelconsumidor.org%2F2021%2F04%2Fel-poder-de-la-almendra%2F&psig=AOvVaw1Hu-1-ZbVjCcQS6fhyLazk&ust=1626555059833000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJjK4_a76PECFQAAAAAdAAAAABAD",
                            precio: 65,
                            unidadesDisponibles: 30

                        }, {
                            _id: 4,
                            descripcion: "Arandanos",
                            urlImagen: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fhdstatic.net%2Fgridfs%2Fholadoctor%2F533b3930b937956c392b1ea0_12_19-1572449532%2C086.jpg&imgrefurl=https%3A%2F%2Fholadoctor.com%2Fes%2F%25C3%25A1lbum-de-fotos%2F10-maravillosas-razones-para-comer-ar%25C3%25A1ndanos&tbnid=5UA7r4qZw9WWoM&vet=12ahUKEwj9xtCPvOjxAhWEl1MKHbSHAtkQMygCegUIARDPAQ..i&docid=3Zgx41RMXR7kKM&w=598&h=448&q=arandanos&ved=2ahUKEwj9xtCPvOjxAhWEl1MKHbSHAtkQMygCegUIARDPAQ",
                            precio: 47,
                            unidadesDisponibles: 600

                        }, {
                            _id: 5,
                            descripcion: "Brocoli",
                            urlImagen: "https://www.google.com/search?q=brocoli&sxsrf=ALeKk02pQP9a7h7N5KfGcBmlBgsJcu6aHg:1626468757874&tbm=isch&source=iu&ictx=1&fir=TFSo2h8hQo24IM%252CEMdx1mZj9__xjM%252C_&vet=1&usg=AI4_-kTNz4IJcseCIvbHYKbyA1xTae-4Pg&sa=X&ved=2ahUKEwi9j7SkvOjxAhVnhuAKHbTZDlsQ9QF6BAgMEAE#imgrc=TFSo2h8hQo24IM",
                            precio: 36,
                            unidadesDisponibles: 56

                        }, {
                            _id: 6,
                            descripcion: "Calabaza",
                            urlImagen: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.vix.com%2Fes%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4x3%2Fpublic%2Fimj%2Fvivirsalud%2Fn%2Fnutrientes%2520de%2520la%2520calabaza1.jpg&imgrefurl=https%3A%2F%2Fwww.vix.com%2Fes%2Fimj%2Fsalud%2F2011%2F10%2F26%2Fnutrientes-de-la-calabaza&tbnid=-Xdf1ub1lKbV8M&vet=12ahUKEwiykK2GvujxAhUdeDABHadtCxgQMygAegUIARDOAQ..i&docid=qcwtqbQXfi1PXM&w=1280&h=720&q=Calabaza&ved=2ahUKEwiykK2GvujxAhUdeDABHadtCxgQMygAegUIARDOAQ",
                            precio: 96,
                            unidadesDisponibles: 89

                        }, {
                            _id: 7,
                            descripcion: "Lychee",
                            urlImagen: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.britannica.com%2F18%2F176518-050-5AB1E61D%2Flychee-fruits-Southeast-Asia.jpg&imgrefurl=https%3A%2F%2Fwww.britannica.com%2Fplant%2Flitchi-fruit&tbnid=CAlmQvSaCKyTfM&vet=12ahUKEwiZ-oLCvejxAhUH0VMKHXDiCqYQMygAegUIARDZAQ..i&docid=3bHoj2dk1yWEfM&w=1600&h=1281&q=lychee&ved=2ahUKEwiZ-oLCvejxAhUH0VMKHXDiCqYQMygAegUIARDZAQ",
                            precio: 54,
                            unidadesDisponibles: 200

                        }, {
                            _id: 8,
                            descripcion: "Canela",
                            urlImagen: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.europapress.es%2Ffotoweb%2Ffotonoticia_20190419082950_1200.jpg&imgrefurl=https%3A%2F%2Fwww.infosalus.com%2Fnutricion%2Fnoticia-pon-poco-canela-vida-salud-mejorara-beneficios-consumo-20190419082950.html&tbnid=i-WiyZub8rhBDM&vet=12ahUKEwif7b2uvujxAhUfazABHZlVCwwQMygAegUIARCbAQ..i&docid=utr45hUhM3hlZM&w=1200&h=801&q=canela&ved=2ahUKEwif7b2uvujxAhUfazABHZlVCwwQMygAegUIARCbAQ",
                            precio: 2,
                            unidadesDisponibles: 200

                        }, {
                            _id: 9,
                            descripcion: "Cebolla",
                            urlImagen: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.lavanguardia.com%2Ffiles%2Farticle_main_microformat%2Fuploads%2F2018%2F07%2F13%2F5e99856f0b685.jpeg&imgrefurl=https%3A%2F%2Fwww.lavanguardia.com%2Fcomer%2Fmateria-prima%2F20180716%2F45869914237%2Fcebolla-alimentos-propiedades-beneficios-valor-nutricional.html&tbnid=hx9mpxeTijR9HM&vet=12ahUKEwjHt-2zvujxAhVRtzEKHdTUBNEQMygAegUIARDKAQ..i&docid=SfAzcrkPPhn8lM&w=976&h=477&q=Cebolla&ved=2ahUKEwjHt-2zvujxAhVRtzEKHdTUBNEQMygAegUIARDKAQ",
                            precio: 15,
                            unidadesDisponibles: 300

                        }, {
                            _id: 10,
                            descripcion: "Fresa",
                            urlImagen: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.interempresas.net%2Ffotos%2F1341264.jpeg&imgrefurl=https%3A%2F%2Fwww.interempresas.net%2FHorticola%2FArticulos%2F164123-Las-pepitas-negras-de-la-fresa-una-fuente-de-antioxidantes.html&tbnid=volqzW_K8DZKuM&vet=12ahUKEwihl-G4vujxAhWZYjABHd_6BHMQMygAegUIARDOAQ..i&docid=QPTG8ckdKKlmsM&w=980&h=560&q=fresa&ved=2ahUKEwihl-G4vujxAhWZYjABHd_6BHMQMygAegUIARDOAQ",
                            precio: 200,
                            unidadesDisponibles: 369

                        },

                        {
                            _id: 11,
                            descripcion: "Kiwi",
                            urlImagen: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.alimentarium.org%2Fen%2Fsystem%2Ffiles%2Fthumbnails%2Fimage%2Falimentarium_kiwis.jpg&imgrefurl=https%3A%2F%2Fwww.alimentarium.org%2Fen%2Fknowledge%2Fkiwi-fruit&tbnid=_NLStuRLDVXGeM&vet=12ahUKEwjTvay9vujxAhW5noQIHSdWDMwQMygAegUIARDZAQ..i&docid=HjpQwsocyQhM7M&w=1008&h=403&q=kiwi&ved=2ahUKEwjTvay9vujxAhW5noQIHSdWDMwQMygAegUIARDZAQ",
                            precio: 47,
                            unidadesDisponibles: 85

                        }, {
                            _id: 12,
                            descripcion: "Limon",
                            urlImagen: "data:image/jpeg;base64,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",
                            precio: 14,
                            unidadesDisponibles: 300

                        }, {
                            _id: 13,
                            descripcion: "Maiz",
                            urlImagen: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.caracteristicas.co%2Fwp-content%2Fuploads%2F2018%2F10%2Fmaiz-2-1-e1581908276964.jpg&imgrefurl=https%3A%2F%2Fwww.caracteristicas.co%2Fmaiz%2F&tbnid=QpJ_H8J1IPXeDM&vet=12ahUKEwiajcfIvujxAhV9h4QIHT7YD14QMygAegUIARDIAQ..i&docid=7xUKsDmI7lkzdM&w=800&h=416&q=maiz&ved=2ahUKEwiajcfIvujxAhV9h4QIHT7YD14QMygAegUIARDIAQ",
                            precio: 58,
                            unidadesDisponibles: 250

                        }, {
                            _id: 14,
                            descripcion: "Manzana",
                            urlImagen: "https://www.google.com/imgres?imgurl=https%3A%2F%2Festaticos.miarevista.es%2Fmedia%2Fcache%2F1000x590_thumb%2Fuploads%2Fimages%2Fgallery%2F59144d795cafe812663c986a%2Frazonescomermanzana-int.jpg&imgrefurl=https%3A%2F%2Fwww.miarevista.es%2Fsalud%2Ffotos%2F10-razones-para-comer-manzana&tbnid=jFmrdwX6DvYtIM&vet=12ahUKEwisuNXUvujxAhW2joQIHf6DDnUQMygAegUIARDKAQ..i&docid=e6R8eawbvXYXsM&w=1000&h=590&q=manzana&ved=2ahUKEwisuNXUvujxAhW2joQIHf6DDnUQMygAegUIARDKAQ",
                            precio: 96,
                            unidadesDisponibles: 900

                        }, {
                            _id: 15,
                            descripcion: "Naranja",
                            urlImagen: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.lechepuleva.es%2Fdocuments%2F13930%2F203222%2Fnaranja_g.jpg%2F374b25a1-2f66-4c7a-b7d1-d123cb310073%3Ft%3D1423215361000&imgrefurl=https%3A%2F%2Fwww.lechepuleva.es%2Faprende-a-cuidarte%2Ftu-alimentacion-de-la-a-z%2Fn%2Fnaranja&tbnid=x80AWqTGOGBaMM&vet=12ahUKEwjRzbLqvujxAhVRsFMKHYtCC6IQMygAegUIARDLAQ..i&docid=d5S3CDhFohJbyM&w=341&h=549&q=naranja&ved=2ahUKEwjRzbLqvujxAhVRsFMKHYtCC6IQMygAegUIARDLAQ",
                            precio: 20,
                            unidadesDisponibles: 65

                        }, {
                            _id: 16,
                            descripcion: "Papa",
                            urlImagen: "data:image/jpeg;base64,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",
                            precio: 14,
                            unidadesDisponibles: 500

                        }, {
                            _id: 17,
                            descripcion: "Pasta",
                            urlImagen: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.jessicagavin.com%2Fwp-content%2Fuploads%2F2020%2F07%2Fhow-to-cook-pasta-3-1200.jpg&imgrefurl=https%3A%2F%2Fwww.jessicagavin.com%2Fhow-to-cook-pasta%2F&tbnid=7AUXfFyzW5v9UM&vet=12ahUKEwjekOiCv-jxAhVSMFMKHaNTA_wQMygCegUIARDxAQ..i&docid=dNbwduonlqb5IM&w=1200&h=1200&q=pasta&ved=2ahUKEwjekOiCv-jxAhVSMFMKHaNTA_wQMygCegUIARDxAQ",
                            precio: 5,
                            unidadesDisponibles: 400

                        }, {
                            _id: 18,
                            descripcion: "Pimienta",
                            urlImagen: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.mehueleaquemao.com%2Fwp-content%2Fuploads%2F2016%2F03%2Fpimienta-de-jamaica-1.jpg&imgrefurl=https%3A%2F%2Fwww.mehueleaquemao.com%2Fpimienta-de-jamaica-recetas-usos%2F&tbnid=afVJnaF5N6u3uM&vet=12ahUKEwjN1bSdv-jxAhXEs1MKHSXJAMwQMygEegUIARC4AQ..i&docid=sHB8qc-1yxfJeM&w=956&h=538&q=pimienta&ved=2ahUKEwjN1bSdv-jxAhXEs1MKHSXJAMwQMygEegUIARC4AQ",
                            precio: 1,
                            unidadesDisponibles: 900

                        }, {
                            _id: 19,
                            descripcion: "Repollo",
                            urlImagen: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.lovemysalad.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fimage_530x397%2Fpublic%2F7154527_m.jpg%3Fitok%3D-L0MaCpE&imgrefurl=https%3A%2F%2Fwww.lovemysalad.com%2Fes%2Fblog%2Fpropiedades-curativas-de-la-col-o-repollo&tbnid=ZbGXbmDlZh71JM&vet=12ahUKEwi_no2_v-jxAhXi8lMKHUmSB5UQMygAegUIARDfAQ..i&docid=wdD4ks3j6a8cDM&w=530&h=397&q=repollo&ved=2ahUKEwi_no2_v-jxAhXi8lMKHUmSB5UQMygAegUIARDfAQ",
                            precio: 23,
                            unidadesDisponibles: 20

                        }, {
                            _id: 20,
                            descripcion: "Tomate",
                            urlImagen: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F8%2F88%2FBright_red_tomato_and_cross_section02.jpg&imgrefurl=https%3A%2F%2Fes.wikipedia.org%2Fwiki%2FSolanum_lycopersicum&tbnid=_HfJ5-IRK2n96M&vet=12ahUKEwjj6t_Kv-jxAhXDQkIHHdUyCIUQMygAegUIARDIAQ..i&docid=hx80bp_PIzsOhM&w=1600&h=1067&q=tomate&ved=2ahUKEwjj6t_Kv-jxAhXDQkIHHdUyCIUQMygAegUIARDIAQ",
                            precio: 36,
                            unidadesDisponibles: 250

                        },

                        {
                            _id: 21,
                            descripcion: "Zanahoria",
                            urlImagen: "https://www.google.com/imgres?imgurl=https%3A%2F%2Felpoderdelconsumidor.org%2Fwp-content%2Fuploads%2F2021%2F05%2Fzanahorias.png&imgrefurl=https%3A%2F%2Felpoderdelconsumidor.org%2F2021%2F05%2Fel-poder-de-la-zanahoria%2F&tbnid=5DkCvI0wbuIEVM&vet=12ahUKEwiHi43bv-jxAhXXMlMKHU0yCzsQMygAegUIARDRAQ..i&docid=19IYGuVQ4eHKeM&w=600&h=375&q=zanahoria&ved=2ahUKEwiHi43bv-jxAhXXMlMKHU0yCzsQMygAegUIARDRAQ",
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



            }

            else{
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