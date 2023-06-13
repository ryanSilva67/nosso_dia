
        const games = {
            nome: "Yu-gi-oh",
            data: 2005,
            author: "eu"
        }

        function exibir(obj) {
            for(let prop in obj) 
            if (typeof obj[prop] === "string")
            console.log(prop, obj[prop]);
            
        }

        exibir(games);
