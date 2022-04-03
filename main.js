const num1 = document.querySelector('#num1')
const num2 = document.querySelector('#num2')

const plus = document.querySelector('#plus')
const minus = document.querySelector('#minus')
const times = document.querySelector('#times')
const divide = document.querySelector('#divide')

const equals = document.querySelector('#equals')

const result = document.querySelector('#result')
let resultVar
const calculate = (parameter) => {

  if (parameter === plus) {
    resultVar = num1.valueAsNumber + num2.valueAsNumber
  } else if (parameter === minus) {
    resultVar = num1.valueAsNumber - num2.valueAsNumber
  } else if (parameter === times) {
    resultVar = num1.valueAsNumber * num2.valueAsNumber
  } else if (parameter === divide) {
    resultVar = num1.valueAsNumber / num2.valueAsNumber
  }
}

equals.addEventListener('click', () => {
  result.textContent = resultVar
  console.log(resultVar)
})

plus.addEventListener('click', () => {
  console.log('+')
  calculate(plus)
})

minus.addEventListener('click', () => {
  console.log('-')

  calculate(minus)
})

times.addEventListener('click', () => {
  console.log('*')
  calculate(times)
})

divide.addEventListener('click', () => {
  console.log('/')
  calculate(divide)
})