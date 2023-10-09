import './style.css'

function kepkeretKeszit(){
//Értékek beolvasása
const url=document.getElementById('url').value;
const kepSzelessege=document.getElementById('szelesseg').value;
const kepVastagsag=document.getElementById('vastagsag').value;
const kepSzin=document.getElementById('szin').value;
//Kép tulajdonságai beálítása
const kep=document.getElementById('kep');
kep.src=url;
kep.style.width=kepSzelessege + "px";
kep.style.borderStyle=`${kepVastagsag}px solid ${kepSzin}`;
}


function init(){
document.getElementById('url').addEventListener("change",kepkeretKeszit);
document.getElementById('szelesseg').addEventListener("input",kepkeretKeszit);
document.getElementById('vastagsag').addEventListener("input",kepkeretKeszit);
document.getElementById('szin').addEventListener("input",kepkeretKeszit);
}

document.addEventListener('DOMContentLoaded', init)