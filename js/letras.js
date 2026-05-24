const botonValidar = document.getElementById("validar");

const letras = [
 "cero",
 "uno",
 "dos",
 "tres",
 "cuatro",
 "cinco",
 "seis",
 "siete",
 "ocho",
 "nueve",

];





const validar  = (e) => {

    let input = parseInt(document.getElementById("numero").value);
    let cajaResultado = document.getElementById("resultado");

    if (isNaN(input) || input < 0 || input > 10) {
        cajaResultado.innerText = "Número no válido";
    } else {
        // Usamos directamente 'numero' que ya lo tenemos arriba
        cajaResultado.innerText = letras[input];
    }



}


botonValidar.addEventListener("click",validar);