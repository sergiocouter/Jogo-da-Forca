let tentativas = 6;
let listaDinamica = [];
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
    const indexPalavra = parseInt(Math.random() * palavras.length) //o math.random gera um número aleatório entre 0 e 1

    nomePalavra = palavras[indexPalavra].nome;
    nomeCategoria = palavras[indexPalavra].categoria;

    console.log(nomePalavra)
    console.log(nomeCategoria)
};  

montarNaTela();
function montarNaTela(){
    const palavraSecreta = document.querySelector("#palavra-secreta");
    palavraSecreta.innerHTML = "";

    const categoria = document.querySelector("#categoria");
    categoria.innerHTML = nomeCategoria;

    for (let i = 0; i < nomePalavra.length; i++) {
        if (listaDinamica[i] == undefined) {
            listaDinamica [i] = "&nbsp;"
            palavraSecreta.innerHTML = palavraSecreta.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>";
        }else{
            palavraSecreta.innerHTML = palavraSecreta.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>";
        }        
    }
};


function verificaLetraClicada(letra) {
    document.getElementById("tecla-" + letra).disabled = true;
    if (tentativas > 0) {
        mudaEstiloLetra("tecla-" + letra);
        comparaListas(letra);
        montarNaTela();
    }
};

function mudaEstiloLetra(tecla) {
    document.getElementById(tecla).style.background = "#FF6000";
    document.getElementById(tecla).style.color = "#FFFFFF";
};

function comparaListas(letra) {
    const posicao = nomePalavra.indexOf(letra)
    if (posicao < 0) {
        tentativas --;
        carregaImagem();

        if (tentativas == 0) {
            abreModal("OPS!", "Suas chances acabaram... <br> A palavra secreta era <br>" + nomePalavra);
        }
        
    }
    else{
        for (let i = 0; i < nomePalavra.length; i++) {

            if (nomePalavra[i] == letra) {
                listaDinamica[i] = letra;
            }
        }
    }

    let vitoria = true;
    for (let i = 0; i < nomePalavra.length; i++) {
        if (nomePalavra[i] != listaDinamica[i]) {
            vitoria = false;
        }
    }

    if (vitoria == true) {
        abreModal("Parabéns", "Você descobriu a palavra <br> Clique no botão com o controle para carregar o jogo");
        tentativas = 0;
    }
};

function carregaImagem() {
    switch (tentativas) {
        case 5:
            document.getElementById("imagem").style.background = "url('./src/forca01.png')";
            break;
        case 4:
            document.getElementById("imagem").style.background = "url('./src/forca02.png')";
            break;
        case 3:
            document.getElementById("imagem").style.background = "url('./src/forca03.png')";
            break;
        case 2:
            document.getElementById("imagem").style.background = "url('./src/forca04.png')";
            break;   
        case 1:
            document.getElementById("imagem").style.background = "url('./src/forca05.png')";
            break;
        case 0:
            document.getElementById("imagem").style.background = "url('./src/forca06.png')";
            break; 
        default:
            document.getElementById("imagem").style.background = "url('./src/forca.png')";
            break;
    }
};

function abreModal( titulo, mensagem) {
    let modalTitulo = document.getElementById("exampleModalLabel");
    let modalMensagem = document.getElementById("modalBody");

    modalTitulo.innerText = titulo;
    modalMensagem.innerHTML = mensagem;

    $("#minhaModal").modal({
        show: true
    });
}

let botaoReiniciar = document.querySelector("#botao-reiniciar");

botaoReiniciar.addEventListener("click", function(){
    location.reload();
})


