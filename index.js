const express = require('express');
const morgan = require('morgan'); //middleware

const app = express();

//SETTINGS
app.set('appName', 'Express Aprendizaje');
app.set('port',2000);
app.set('view engine','ejs');
//app.set('example','Juan') establece propiedades que pueden ser leidas por app.get('example');

//MIDDLEWARES
app.use(express.json());
app.use(morgan('dev'));  //Muetra por consola la petición de lo que llega desde la web

// app.all('/user', (req, res, next)=>{
//     console.log('Ruta usuarios');
//     next();
// });

app.get('/', (req,res)=>{
    const data = [{"name":"Juan","edad":29,ciudad:"Aguachica"},{"name":"Jaime","edad":32,ciudad:"Valledupar"},{"name":"Roxana","edad":31,ciudad:"Aguachica"}];
    res.render('index.ejs', {people: data});
})

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

app.listen(app.get('port'), ()=>{
    console.log(app.get('appName'));
    console.log("Server on port ", app.get('port'));
});

