const inAdultos = document.querySelector("#adultos");
const inCrianca = document.querySelector("#criancas");
const inDuracao = document.querySelector("#duracao");
const resultado = document.querySelector("#resultado");

function calcular() {
    let adultos = inAdultos.value;
    let criancas = inCrianca.value;
    let duracao = inDuracao.value;


    let qntCarne = carnePP(duracao) * adultos + (carnePP(duracao) * criancas) / 2;
    let qntCerveja = cervejaPP(duracao) * adultos;
    let qntBebida = bebidaPP(duracao)  * adultos + (bebidaPP(duracao) * criancas) / 2;

    resultado.innerHTML = `<p>${qntCarne / 1000} kl de carne</p>`;
    resultado.innerHTML += `<p>${Math.ceil(qntCerveja / 1000)} l de cerveja</p>`;
    resultado.innerHTML += `<p>${Math.ceil(qntBebida / 1000)} l de bebida</p>`;
}


function carnePP(duracao) {
    if(duracao > 6)
    return 4000;

    else
    return 2000;
}

function cervejaPP(duracao) {
    if(duracao > 6)
    return 2000;

    else
    return 1200;
}

function bebidaPP(duracao) {
    if(duracao)
    return 2000;

    else
    return 1200;
}