# = El ejemplo consiste en sacar el numero mas alto de un array dado
#
# Autor::   Mariela Fernández
# Date:: 01-06-2020
# == Código
#   -cuenta con un array llamado numbers que es el que se le envia # por parametro al metodo maximumNumber.
#
# * metodo maximumNumber, retorna el numero mayor numero. 
#

numbers = [13,2,4,35,1]

def maximumNumber(numbers)
  number=0
    numbers.each do |element|
      if element > number
        number= element
      end 
    end
  puts number 
  #return number
end

maximumNumber(numbers)
