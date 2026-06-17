const number = document.querySelector('#number')

let n = 0
let operation = ''

const f = function () {
  const val = number.value.trim()
  if (val === '') return

  const num = parseFloat(val)
  if (isNaN(num)) return

  if (operation === '') {
    n = num
  } else {
    switch (operation) {
      case '+': n += num; break
      case '-': n -= num; break
      case '*': n *= num; break
      case '/': n /= num; break
    }
  }
}

number.addEventListener('beforeinput', function (e) {
  const allowed = '0123456789+-/*.='
  const char = e.data

  if (char && !allowed.includes(char)) {
    e.preventDefault()
    return
  }

  if (e.inputType === 'insertLineBreak' || char === '=') {
    f()
    number.value = n
    n = 0
    operation = ''
    e.preventDefault()
    return
  }

  if ('+-*/'.includes(char)) {
    f()
    operation = char
    number.value = ''
    e.preventDefault()
    return
  }
})

const btnAC = document.querySelector('#btn-ac')
const btnSQRT = document.querySelector('#btn-sqrt')
// const btnPercent = document.querySelector('#btn-percent')

const btn1 = document.querySelector('#btn-1')
const btn2 = document.querySelector('#btn-2')
const btn3 = document.querySelector('#btn-3')
const btn4 = document.querySelector('#btn-4')
const btn5 = document.querySelector('#btn-5')
const btn6 = document.querySelector('#btn-6')
const btn7 = document.querySelector('#btn-7')
const btn8 = document.querySelector('#btn-8')
const btn9 = document.querySelector('#btn-9')
const btn0 = document.querySelector('#btn-0')

const btnDivision = document.querySelector('#btn-division')
const btnMultiplication =  document.querySelector('#btn-multiplication')
const btnMinus = document.querySelector('#btn-minus')
const btnAddition = document.querySelector('#btn-addition')

const btnDot = document.querySelector('#btn-dot')
const btnBackspace = document.querySelector('#btn-backspace')
const btnEquals = document.querySelector('#btn-equals')

btnAC.addEventListener('click', function (e) {
  number.value = ''
  n = 0
  operation = ''
}, false)

btnSQRT.addEventListener('click', function () {
  number.value = Math.round(Math.sqrt(parseFloat(number.value)) * 100) / 100
}, false)

const buttons = [btn0, btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9]

for (let i = 0; i < buttons.length; ++i) {
  const b = buttons[i]
  b.addEventListener('click', function () {
    number.value += String(i)
  }, false)
}

const g = function (char) {
  return function () {
    f()
    operation = char
    number.value = ''
  }
}

btnDivision.addEventListener('click', g('/'), false)
btnMultiplication.addEventListener('click', g('*'), false)
btnMinus.addEventListener('click', g('-'), false)
btnAddition.addEventListener('click', g('+'), false)


btnDot.addEventListener('click', function () {
  number.value += '.'
}, false)
btnBackspace.addEventListener('click', function () {
  number.value = number.value.slice(0, number.value.length - 1)
}, false)
btnEquals.addEventListener('click', function () {
  f()
  number.value = n
  n = 0
  operation = ''
}, false)
