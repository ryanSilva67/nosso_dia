fizzBuzz(15) ;

        function fizzBuzz(valor) {
            if (typeof valor !== "number")
          return  console.log("NaN");

            if (valor % 3 === 0 && valor % 5 === 0)
          return  console.log("fizzBuzz");

            if (valor % 3 === 0)
         return   console.log("Fizz");

            if (valor % 5 === 0)
         return   console.log("Buzz");
        }