$(document).ready(function(){

var serieA = [
    {    
    'nome':'inter',
    'punti':'',
    'falliSubiti':'',
    'falliFatti':''
    },
    {    
    'nome':'juventus',
    'punti':'',
    'falliSubiti':'',
    'falliFatti':''
    },
    {    
    'nome':'roma',
    'punti':'',
    'falliSubiti':'',
    'falliFatti':''
    },
    {    
    'nome':'milan',
    'punti':'',
    'falliSubiti':'',
    'falliFatti':''
    },
    {    
    'nome':'atalanta',
    'punti':'',
    'falliSubiti':'',
    'falliFatti':''
    },
    {    
    'nome':'fiorentina',
    'punti':'',
    'falliSubiti':'',
    'falliFatti':''
    },
    {    
    'nome':'genoa',
    'punti':'',
    'falliSubiti':'',
    'falliFatti':''
    },
    {    
    'nome':'sampdoria',
    'punti':'',
    'falliSubiti':'',
    'falliFatti':''
    },
    {    
    'nome':'napoli',
    'punti':'',
    'falliSubiti':'',
    'falliFatti':''
    },
    {    
    'nome':'salernitana',
    'punti':'',
    'falliSubiti':'',
    'falliFatti':''
    },
]
console.log(serieA);

var vittoria = serieA[0]
var sconfitta = serieA[0]

serieA.forEach(element => {

element.punti =punti()
element.falliFatti=ff()
element.falliSubiti=fs()

});



serieA.forEach(element => {
    
    const {nome, punti, falliFatti, falliSubiti}=element
  
    $('#squadre').append(`<li style="margin-top:10px; margin-left:10px; background-color:blue; color:white;width:625px; padding:2px 20px">
    NOME SQUADRA: ${nome}  , 
    PUNTI SQUADRA${punti},   FALLI FATTI : ${falliFatti}   FALLI SUBITI : ${falliSubiti}</li>`)
    if(element.punti > vittoria.punti){

        vittoria = element
    
        
        
    } 
     
    if (element.punti < sconfitta.punti){

        sconfitta= element
    }

});
   
   $('#vittoria').append(`<li style="list-style:none; margin-top:10px; margin-left:10px; background-color:green; color:white;width:625px; padding:2px 20px">la squadra che ha vinto è : ${vittoria.nome}    ed ha totalizzato : ${vittoria.punti} punti</li>`)
   $('#sconfitta').append(`<li style="list-style:none; margin-top:10px; margin-left:10px; background-color:red; color:white;width:625px; padding:2px 20px">la squadra che sarà retrocessa è : ${sconfitta.nome}    ed ha totalizzato : ${sconfitta.punti} punti</li>`)
    console.log('questa squadra è arrivata ultima  in campionato');
    console.log(sconfitta);


})
const punti = ()=>{
    return Math.floor(Math.random()*(1, 100)+1);
}
const ff = ()=>{
    return Math.floor(Math.random()*(1, 100)+1);
}
const fs = ()=>{
    return Math.floor(Math.random()*(1, 100)+1);
}