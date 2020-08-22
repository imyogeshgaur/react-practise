const additionOfNumbers = (a, b) => a+b
const substractionOfNumbers = (a, b) => a-b
const multiplicationOfNumbers= (a, b) => a*b
function divisionOfNumbers(a, b) {
  if (a === 0 || b === 0) {
    return 'Cannot Divide By Zero'
  }
  else {
    let division = a / b
    return division.toFixed(2)
  }
}
export {additionOfNumbers, substractionOfNumbers, multiplicationOfNumbers, divisionOfNumbers}