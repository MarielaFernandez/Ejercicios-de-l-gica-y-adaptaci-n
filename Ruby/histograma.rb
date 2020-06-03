# = El ejemplo consiste en sacar un histograma de los # numeros enteros del 1 al 5.
#
# Autor::   Mariela Fernández
# Date:: 01-06-2020
# == Código
#   -cuenta con un array llamado array que es el que 
# se le envia por parametro al metodo histogram.
#
# * metodo histogram, retorna un array con el 
# histograma de los numeros. 
#

array = [1,2,1,3,3,1,2,1,5,1]


def histogram(array)

  myArray = array.sort!
  quantityLast = myArray.last
  quantityFirst = myArray.first
  counter=""

  for i in quantityFirst..quantityLast
  counter += "\n"
  counter += i.to_s
  counter += ": "
    for j in myArray

      if j==i
        counter+= "*"

      else
      end 
    end

  end 
  # puts counter
  return counter
end

puts histogram(array)


