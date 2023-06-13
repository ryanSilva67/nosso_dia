
        console.log(maxVelo(100));

        function maxVelo(limite) {
            const km = 40;
            const lost = 5;

            if (limite <= km) {
                return "Ok";
            }

            else {
                const points = Math.floor(limite - km) / lost;

                if (points > 12)
                return "Saía";

                else
               return points + " " + "pontos";
            }
        }