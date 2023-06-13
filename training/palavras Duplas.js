function palavrasDuplas(frase) {
    let palavras = frase.split(" ");

    let dupla = [];

    for (let i = 0; i < palavras.length; i++) {
        if (palavras.indexOf(palavras[i]) !== palavras.lastIndexOf(palavras[i])) {
           
            dupla.push(palavras[i]);
        }
    }

    return console.log(dupla);
}


let string = "o ryan é um cara legal e é um ryan";
palavrasDuplas(string);

// OU...

function doubleWord(phase) {
    let word = phase.split(" ");

    let double = {};

    for (let i = 0; i < word.length; i++) {
        let words = word[i];

        if (word.indexOf(words) !== i) {
            double[words] = true;
        }
    }
    let result = Object.keys(double);
    return console.log(result);
}

doubleWord(string);