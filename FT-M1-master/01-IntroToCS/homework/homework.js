'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  return num.split('').reverse().reduce(function (accumulador, elemento,index)  {
  	  return accumulador + elemento * Math.pow(2, index);
  	},0)
}

function DecimalABinario(num) {
  // tu codigo aca
  let result = ""

  while (num > 0) {
    result = (num % 2) + result;
    num = Math.floor(num / 2);
  }
  return result;
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}