
let a = prompt("numero");

console.log("seu número é:", a);

console.log(`a raíz quadrada é ${a ** 0.5}`);


if (a % 1 === 0) {
console.log(a, "é inteiro")
}
else {
console.log(a, "não é inteiro");
}
a = Number(a);
console.log(`arredondando pra baixo é${Number(Math.floor(a))}`);
console.log(`arredondando pra cima é${Number(Math.ceil(a))}`);
console.log(`com 2 casas decimais: ${a.toFixed(2)}`);
console.log(`é NaN? ${isNaN(a)}`);