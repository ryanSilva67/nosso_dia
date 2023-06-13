contador(8);

      function contador(linhas) {
        for (let linha = 1; linha <= linhas; linha++) {
          let padrao = "";

          for (i = 0; i < linha; i++) {
            padrao += "*";
          }
          console.log(padrao);
        }
      }