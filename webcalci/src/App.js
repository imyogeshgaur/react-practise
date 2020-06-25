const additionOfNumbers = (a, b) => a+b
const substractionOfNumbers = (a, b) => a-b
const multiplicationOfNumbers= (a, b) => a*b
const  remainderOfNumbers = (a,b) => a%b
function divisionOfNumbers(a, b) {
  if (a === 0 || b === 0) {
    return 'Cannot Divide By Zero'
  }
  else {
    let division = a / b
    return division.toFixed(2)
  }
}
function maximumOfNumbers (a,b) {
  if(a>b){
    return a;
  }
  else
  {
    return b;
  }
}
function minimumOfNumbers (a,b) {
  if(a<b){
    return a;
  }
  else
  {
    return b;
  }
}
export {additionOfNumbers, substractionOfNumbers, multiplicationOfNumbers, divisionOfNumbers,maximumOfNumbers,minimumOfNumbers,remainderOfNumbers}