const lamp = document.querySelector("#lamp");
const on = document.querySelector("#ligado");
const off = document.querySelector("#desligado");

on.addEventListener("click", lampOn);
off.addEventListener("click", lampOff);
lamp.addEventListener("dblclick", broken);

function isBroken() {
   return lamp.src.indexOf("quebrada") > -1;
}


function lampOn() {
    if(!isBroken()) {
    lamp.src = "img/acessa.jpg";
  }  
}

function lampOff() {
    if(!isBroken()) {
    lamp.src = "img/apagada.jpg";
  }  
}

function broken() {
    lamp.src = "img/quebrada.jpg"
}

let a = "boroca estranha";
console.log(a.indexOf("estranha") > -1)