//Selectores
let palabra = ["ALURA","ORACLE","ONE", "JAVASCRIPT", "HTML","CSS"];
let tablero = document.getElementById("forca").getContext("2d");
let palabraSecreta = "";

//Palabra secreta

function escojerPalabraSecreta(){
    let palabra = palabras[Math.floor(Math.random() * palabras.length)]
    palabraSecreta = palabra
    console.log(palabraSecreta)
}

//Iniciar juego

function iniciarJuego(){
    document.getElementById("iniciar-juego").style.display = "none";

    escojerPalabraSecreta()
    dibujarCanvas()
    dibujarLinea()
}