/*
CREIAMO UN ARRAY DI OGGETTI ! GLI OGGETTI SARANNO DELLE BICICLETTE E CONTERRANNO : PESO MODELLO MARCA PREZZO
UNA VOLTA FATTO CIO' ESTRAPOLIAMO LA BICICLETTA CON IL PESO INFERIORE ALLE ATRE!
*/

//STEP 1 CREIAMO IL NOSTRO ARRAY DI OGGETTI BICICLETTE

$(document).ready(function(){

var biciDaCorsa = [
    {
     'nome':'bici1',
     'peso':6.5,
     'prezzo':'5500',
    },
    {
     'nome':'bici2',
     'peso':7.3,
     'prezzo':'5500',
    },
    {
     'nome':'bici3',
     'peso':6.8,
     'prezzo':'5500',
    },
    {
     'nome':'bici4',
     'peso':6.1,
     'prezzo':'5500',
    },
    {
     'nome':'bici5',
     'peso':9.1,
     'prezzo':'5500',
    },
    {
     'nome':'bici6',
     'peso':5.4,
     'prezzo':'5500',
    },
    {
     'nome':'bici7',
     'peso':5.7,
     'prezzo':'5500',
    },
    {
     'nome':'bici8',
     'peso':3.9,
     'prezzo':'5500',
    },
    {
     'nome':'bici9',
     'peso':9.5,
     'prezzo':'5500',
    },
    {
     'nome':'bici10',
     'peso':4.0,
     'prezzo':'5500',
    },


];
var leggera = biciDaCorsa[0]
biciDaCorsa.forEach(element => {
    
   var nome=element.nome
   var peso =element.peso
   var prezzo =element.prezzo
    
   $('#nome').append(`<li>NOME: ${nome}</li>`), $('#peso').append(`<li>PESO: ${peso}Kg</li>`)
   $('#prezzo').append(`<li>IL PREZZO E' DI : ${prezzo} €`)
if(element.peso < leggera.peso){

    leggera = element
}

});
$('#light').append(`<li> NOME:${leggera.nome}</li>`),$('#light').append(`<li>PESO BICICLETTA ${leggera.peso} Kg</li>`)
$('#light').append(`<li>PREZZO BICICLETTA ${leggera.prezzo}€</li>`)


//utilizzo il destructuring e un ciclo for   per creare un array dove inserire le proprietà peso e nome delle bici da corsa
for(var i = 0; i < biciDaCorsa.length; i++){

    var {nome, peso}=biciDaCorsa[i]



    var mioArray = []
    mioArray.push(nome, peso)
    console.log(mioArray);
    $('#dest').append(`<li style="margin-top:9.5px;box-shadow:0px 0px 4px 4px black">${mioArray}</li>`)
}


})
