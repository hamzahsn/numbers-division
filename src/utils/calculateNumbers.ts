export const calculateNumbers = (firstNumber: number, secondNumber: number) => {
  let numberOfDivisible: number = 0

  for (let i = firstNumber; i <= secondNumber; i++) {
    if (i % 3 === 0) {
      numberOfDivisible++
    }
  }
  return numberOfDivisible
}
