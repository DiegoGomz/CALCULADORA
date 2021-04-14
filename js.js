function celsiusafaren(){
    let celsius = document.querySelector('#BC');
    celsius= (BC.value*9/5)+32;
    console.log(celsius+" Grados Celsius");
    BC.value=celsius;
}
function farenacelsius(){
    let faren = document.querySelector('#BF');
    faren= (BF.value -32)*5/9;
    console.log(faren+ " Grados Fahrenheit");
    BF.value=faren;
}
function metrosakilo(){
    let metro = document.querySelector('#BM');
    metro= BM.value / 1000;
    console.log(metro+" Kilometros");
    BM.value=metro;
}
function kiloametros(){
    let kilo = document.querySelector('#BK');
    kilo= BK.value * 1000;
    console.log(kilo+" Metros");
    BK.value=kilo;
}

let botonCaF= document.querySelector('#botonBC');
botonCaF.addEventListener('click',celsiusafaren);
let botonFaC= document.querySelector('#botonBF');
botonFaC.addEventListener('click',farenacelsius);
let botonMaK= document.querySelector('#botonBM');
botonMaK.addEventListener('click',metrosakilo);
let botonKaM= document.querySelector('#botonBK');
botonKaM.addEventListener('click',kiloametros);