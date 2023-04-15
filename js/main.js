let nomePalavra;
let nomeCategoria;


const palavras = [
    palavra001 = {
        nome: "BRASIL",
        categoria: "PAÍSES"
    },
    palavra002 = {
        nome: "IRLANDA",
        categoria: "PAÍSES"
    },
    palavra003 = {
        nome: "VENEZUELA",
        categoria: "PAÍSES"
    },
    palavra004 = {
        nome: "PORTUGAL",
        categoria: "PAÍSES"
    },
    palavra005 = {
        nome: "LUXEMBURGO",
        categoria: "PAÍSES"
    },
    palavra006 = {
        nome: "ARGENTINA",
        categoria: "PAÍSES"
    },
    palavra007 = {
        nome: "ESPANHA",
        categoria: "PAÍSES"
    },
    palavra008 = {
        nome: "DINAMARCA",
        categoria: "PAÍSES"
    },
    palavra009 = {
        nome: "NORUEGA",
        categoria: "PAÍSES"
    },
    palavra010 = {
        nome: "HUNGRIA",
        categoria: "PAÍSES"
    },
    palavra011 = {
        nome: "BANANA",
        categoria: "FRUTAS"
    },
    palavra012 = {
        nome: "UVA",
        categoria: "FRUTAS"
    },
    palavra013 = {
        nome: "ABACAXI",
        categoria: "FRUTAS"
    },
    palavra014 = {
        nome: "TOMATE",
        categoria: "FRUTAS"
    },
    palavra015 = {
        nome: "MANGA",
        categoria: "FRUTAS"
    },
    palavra016 = {
        nome: "CARAMBOLA",
        categoria: "FRUTAS"
    },
    palavra017 = {
        nome: "KIWI",
        categoria: "FRUTAS"
    },
    palavra018 = {
        nome: "ABACATE",
        categoria: "FRUTAS"
    },
    palavra019 = {
        nome: "AMORA",
        categoria: "FRUTAS"
    },
    palavra020 = {
        nome: "LARANJA",
        categoria: "FRUTAS"
    },
    palavra021 = {
        nome: "FUTEBOL",
        categoria: "ESPORTE"
    },
    palavra022 = {
        nome: "BASQUETE",
        categoria: "ESPORTE"
    },
    palavra023 = {
        nome: "HANDEBOL",
        categoria: "ESPORTE"
    },
    palavra024 = {
        nome: "BEISEBOL",
        categoria: "ESPORTE"
    },
    palavra025 = {
        nome: "CAPOEIRA",
        categoria: "ESPORTE"
    },
    palavra026 = {
        nome: "GOLFE",
        categoria: "ESPORTE"
    },
    palavra027 = {
        nome: "HIPISMO",
        categoria: "ESPORTE"
    },
    palavra028 = {
        nome: "SURFE",
        categoria: "ESPORTE"
    },
    palavra029 = {
        nome: "AMORA",
        categoria: "ESPORTE"
    },
    palavra030 = {
        nome: "REMO",
        categoria: "ESPORTE"
    },
];

criarPalavraSecreta()
function criarPalavraSecreta(){
    const indexPalavra = parseInt(Math.random() * palavras.length)

    nomePalavra = palavras[indexPalavra].nome;
    nomeCategoria = palavras[indexPalavra].categoria;

    console.log(nomePalavra)
    console.log(nomeCategoria)
}

