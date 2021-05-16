const express=require("express");
const app=express();
const path=require("path");
const PUERTO=3322;

app.use(express.urlencoded({extended:true}));

app.use(express.static(__dirname));

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname,"index.html"));
})
app.post("/login",function(req, res){
    console.log(req.body);
    res.send(`Hola ${req.body.Nombre} "${req.body.Apodo}" ${req.body.Apellido} `);
})
app.listen(PUERTO,function() {
    console.log("Iniciando servidor...") 
})

