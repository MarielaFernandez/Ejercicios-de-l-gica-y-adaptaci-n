/** 
* El siguiente código lo que se encarga es de realizar 
* multiplicaciones de arrays, en el cual itera cada numero y los 
* multiplicas exepto a el mismo.
*
*@date 01-06-2020
*@autor Mariela Fernández
*/

// Los siguientes arrays son los ejemplos que se utilizaran para la función getMultiplication. 

const arrayA = [2, 3, 4, 6];
const arrayB = [123, 67, 890, 4];
const arrayC = [2, 3, 7, 9, 4, 5, 6, 9, 12];


/** 
 * La función getMultiplication se encarga de iterar un array y
 * multiplicar los datos de este, sin tomar en cuenta el numero
 * donde se encuentra posicionado.
 * 
 * @param array es un arreglo de numeros
 * @return resultArray es un arreglo con la multiplicaciones
*/
function getMultiplication(array) {

  let resultArray = [];
  let multiplicationArray = [];

  //recorre el array que se recibió por parametro
  for (let i = 0; i < array.length; i++) {
    let result = 1;

    for (let j = 0; j < array.length; j++) {

      //busca que las pocisiones sean diferentes.
      if (j != i) {
        multiplicationArray.push(array[j]);
      }
    }

    for (let k = 0; k < multiplicationArray.length; k++) {

      // se realiza la multiplicación de los demás numeros que no es en la posicion que se itera.
      result = result * multiplicationArray[k];

    }
    //se limpia la matriz.
    multiplicationArray = [];
    //Se agrega el resultado obtenido a una variable local para retornar.
    resultArray.push(result);

  }
  return resultArray;

}

//Se imprime en consola la función getMultiplication con los ejemplos.
console.log(getMultiplication(arrayA));
console.log(getMultiplication(arrayB));
console.log(getMultiplication(arrayC));


