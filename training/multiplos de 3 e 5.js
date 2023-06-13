
multiplos(60);

function multiplos(limite) {
    let mt3 = 0;
    let mt5 = 0;

    for(i = 0; i <= limite; i++) {
        if(i % 3 === 0)
        mt3 += i;

        if(i % 5 === 0)
        mt5 += i;
    }

    console.log(mt3 + mt5);
}
