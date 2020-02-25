window.onload = function () {
  const calculator = document.querySelector('.calculator')
  const keys = document.querySelector('.calculator_key')
  const display = document.querySelector('.calc-screen')
  display.textContent = '0'

  const calculate = (n1, operator, n2) => {
    let result = ''
    if (operator === 'add') {
      result = parseFloat(n1) + parseFloat(n2)
    } else if (operator === 'substract') {
      result = parseFloat(n1) - parseFloat(n2)
    } else if (operator === 'multiply') {
      result = parseFloat(n1) * parseFloat(n2)
    } else if (operator === 'divide') {
      result = parseFloat(n1) / parseFloat(n2)
    }
    return result
  }

  keys.addEventListener('click', e => {


    if (e.target.matches('button')) {
      const key = e.target
      const action = key.dataset.action
      const keyContent = key.textContent
      const displayedNum = display.textContent
      const previousKeyType = calculator.dataset.previousKeyType

      if (!action) {

        if (displayedNum === '0' || previousKeyType === 'operator') {
          display.textContent = keyContent
          calculator.dataset.previousKeyType = ''
        } else {
          display.textContent = displayedNum + keyContent
        }
      }
      if (action === 'add' || action === 'substract' || action === 'multiply' || action === 'divide') {
        // key.classList.add('is-depressed')
        calculator.dataset.firstValue = displayedNum
        calculator.dataset.operator = action
        calculator.dataset.previousKeyType = 'operator'
      }
      if (action === 'decimal') {
        if (!displayedNum.includes('.')) {
          display.textContent = displayedNum + '.'
        }
      }
      if (action === 'clear') {
        display.textContent = '0'
      }
      if (action === 'calculate') {
        const n1 = calculator.dataset.firstValue
        const operator = calculator.dataset.operator
        const n2 = displayedNum
        display.textContent = calculate(n1, operator, n2)
      }
    }


  })
}