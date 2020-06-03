/** 
* La clase Main lo que pretende es ejecutar el metodo
* que se encarga de verificar cuanta es la cantidad de
* ocurrencias seguidas de un numero y cual es dicho 
* numero. 
*
*
*@date 01-06-2020
*@autor Mariela Fernández
*/


class Main {
  
  static int finalCounter=0;
  static int number=0;
      
 
  /** 
  * La función occurrences lo que hace es sacar la cantidad del numero que mas se repite seguidamente y la cantidad de veces que 
  * se repite 
  * 
  * @param array es un arreglo de numeros
  * @return Array el cual es la cantidad de ocurrencias 
  * y el numero que se repite.
  */

  public static int[] occurrences(int [] integers){

    int j=0;
    int k=0;
    int counter=0;

    for(int i=0; i<= integers.length; i++){
      

      if(i <= integers.length-1 ){
        //se crean estas variables para conocer el numero anterior y sucesor.
        j=i+1;
        k=i-1;

        // este if hace la comparacion de cuando es el antecesor y cuando son diferentes.
        if(i == integers.length-1 || integers[i]!=integers[j] && i>0){

          if(integers[i]==integers[k]){
            counter=counter+1;
          }

          if(finalCounter > counter){
            counter=0;
          }else {
            finalCounter=counter;
            number=integers[i];
            counter=0;
          }
        
                
        //hace la comparacion caundo son iguales. 
        }else if(integers[i]==integers[j]){
          counter=counter+1;
        }
              
      }
          
    }
    // este contador se encarga de llenar el array que se va a retornar. 
    if(finalCounter == 0){

      number=0;
      int [] array = {finalCounter, number};
      return array;

    }else{

      int [] array = {finalCounter, number};
      return array;
    }
      

  }
  public static void main(String[] args) {

    int [] integers = {1,2,2,5,4,6,7,8,8,8};
    int [] result = occurrences(integers);
    
    // se imprime en consola los resultados. 
    System.out.println("Ocurrencias: " + result[0]);
    System.out.println("Numero: " + result[1]);
  }
}
