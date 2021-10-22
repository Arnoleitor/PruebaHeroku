const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const logger = require('./config/winston');
const router = require('./router')


const app = express();
const PORT = 3000;

let fabricantes =[
    {id:1, nombre : "Dell"},
    {id:2, nombre : "Microsoft"},
    {id:3, nombre : "Ubisoft"},
    {id:4, nombre : "Pikolin"}
];
let articulos=[
    {id:1, nombre : "Portatil", precio: 400, fabricante: 1},
    {id:2, nombre : "Sistema Operativo", precio: 295, fabricante: 2},
    {id:3, nombre : "Videojuego", precio: 70, fabricante: 3},
    {id:4, nombre : "Colchones", precio: 200, fabricante: 4}
];

//middelware
//app.use(morgan('combined'));
app.use(morgan('combined', {stream: logger.stream}));
app.use(express.json());


app.use(router);

// app.get('/', (req, res) => {
//     let date = new Date();
//     //console.log(`home route works... ${date}`);
//     res.send('Bienvenidos a Express');
// })



app.listen(PORT, ()=>{
    console.log(`port... ${PORT}`.bgGreen.black);
})

