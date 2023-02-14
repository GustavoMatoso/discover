
const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {

    const items = [
        {
            title: "Carro",
            cor: "vermelho"
        },
        {
            title: "Carro",
            cor: "azul"
        },
        {
            title: "Carro",
            cor: "amarelo"
        },
        {
            title: "Carro",
            cor: "verde"
        }
    ];

    const items2 = [
        {
            title: "Moto",
            cor: "roxa"
        },
        {
            title: "Moto",
            cor: "dourada"
        },
        {
            title: "Moto",
            cor: "preta"
        },
        {
            title: "Moto",
            cor: "cinza"
        }
    ];

    res.render("pages/index", {
        quatroRodas: items, duasRodas: items2,
    });
});

app.get("/sobre", (req, res) => {
    const bemvindo = "Seja muito bem vindo!"
    res.render("pages/about", {bemvindo: bemvindo,});
});

app.listen(8080);
console.log("SERVER RODANDO !");