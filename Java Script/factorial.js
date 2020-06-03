/** 
* El siguiente código lo que se encarga es de realizar el factorial del 
* numero que se le indique.
*
*
*@date 01-06-2020
*@autor Mariela Fernández
*/

// En esta constante lo que está recibiendo es el identificador del botón para saber cuando hace click
const button=document.getElementById('accept')

// se procede a realizar esta función si se hace click en el botón.
button.addEventListener('click',()=>{
    
    //se limpia el espacio donde esta la lista. 
    document.getElementById("lists").innerHTML="";

    const number=document.getElementById("number").value;
    
    const container=document.getElementById('list')
    const lists=document.getElementById('lists');
    const options=document.createDocumentFragment()

    //se ejecuta la funcion de factorial 
    let result = factorial(number);

    // se recorre el resultado para imprimirlo en el html
    for (var i = 0; i < result.length ; i++) {

        //ejecuta el resultado en consola
        console.log(result[i]);
      
        const option=document.createElement('li')
        option.textContent= result[i]
        option.setAttribute('value',i)
        options.appendChild(option)
     }


     lists.appendChild(options)
    
})


/** 
 * La función factorial lo que se encarga es de sacar el factorial de el numero que se le ingresa.
 * 
 * @param number recibe un numero que es el que se le va a sacar el factorial.
 * @return array es un arreglo con el factorial. 
*/

function factorial(number){
    let array=[];
    let result=1;

        for (let i = 0; i <= number; i++) {

            if(i == 0){

                array.push(i+'! = 1');

                i++;
            }

            result= result*i;
            array.push(i+'! = '+result);
        }
         
        return array;
}