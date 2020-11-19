const express = require('express');
const morgan = require('morgan'); //middleware

const app = express();


app.use(express.json());
app.use(morgan('dev'));  //Muetra por consola la petición de lo que llega desde la web

// app.all('/user', (req, res, next)=>{
//     console.log('Ruta usuarios');
//     next();
// });

app.get('/user',(req, res) =>{
    res.json({
        "nombre":"Juan",
        "apellido":"Bermudez",
        "ubicacion":{
            "direccion":"Calle 7C # 19A - 94",
            "barrio":"Las Gaviotas",
            "ciudad":"Valledupar",
            "departamento":"Cesar",
            "pais":"Colombia"
        }
    });
});

app.post('/user/:userId',(req, res) =>{
    console.log(req.params);
    console.log(req.body);
    res.send(req.body);
});

app.put('/user/:userId',(req, res) =>{
    console.log(req.body);
    res.send(`User ${req.params.userId} updated`);
});

app.delete('/user/:userId',(req, res) =>{
    res.send(`User ${req.params.userId} delete`);
});

app.use(express.static('public')); //middleware para traer archivos

app.listen(3000, ()=>{
    console.log("Server on port 3000");
});

