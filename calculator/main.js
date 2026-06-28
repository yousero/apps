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
      case '^': n = Math.pow(n, num); break
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
    number.value = ''
    answer.textContent = Math.round(n * 10000) / 10000
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
  answer.textContent = ''
  number.value = ''
  n = 0
  operation = ''
}, false)

btnSQRT.addEventListener('click', function () {
  if (number.value) {
    n = parseFloat(number.value)
  }
  n = Math.sqrt(n)
  answer.textContent = Math.round(n * 10000) / 10000
  number.value = ''
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
  if (!number.value.includes('.')) {
    number.value += '.'
  }
}, false)
btnBackspace.addEventListener('click', function () {
  number.value = number.value.slice(0, number.value.length - 1)
}, false)

const answer = document.querySelector('#answer')

btnEquals.addEventListener('click', function () {
  f()
  number.value = ''
  answer.textContent = Math.round(n * 10000) / 10000
  operation = ''
}, false)


const keypad = document.querySelector('#keypad')
const keypadExtend = document.querySelector('#keypad-extend')

const btnMore = document.querySelector('#btn-more')
const btnBack = document.querySelector('#btn-back')

const toggleKeypad = function () {
  keypad.classList.toggle('hidden')
  keypadExtend.classList.toggle('hidden')
}

btnMore.addEventListener('click', toggleKeypad, false)
btnBack.addEventListener('click', toggleKeypad, false)

const btnSin = document.querySelector('#btn-sin')
const btnCos = document.querySelector('#btn-cos')
const btnTan = document.querySelector('#btn-tan')

let deg = true

btnSin.addEventListener('click', function () {
  if (number.value == '' && answer.textContent != '') {
    answer.textContent = Math.sin(n)
  } else {    
    answer.textContent = Math.sin(number.value)
  }
  number.value = ''
}, false)
btnCos.addEventListener('click', function () {
  if (number.value == '' && answer.textContent != '') {
    answer.textContent = Math.cos(n)
  } else {    
    answer.textContent = Math.cos(number.value)
  }
  number.value = ''
}, false)
btnTan.addEventListener('click', function () {
  if (number.value == '' && answer.textContent != '') {
    answer.textContent = Math.tan(n)
  } else {    
    answer.textContent = Math.tan(number.value)
  }
  number.value = ''
}, false)

const btnPower = document.querySelector('#btn-power')
const btnFactorial = document.querySelector('#btn-factorial')
const btnLog = document.querySelector('#btn-log')
const btnLn = document.querySelector('#btn-ln')

const btnPi = document.querySelector('#btn-pi')
const btnE = document.querySelector('#btn-e')
const btnDegRad = document.querySelector('#btn-degrad')
const btnRnd = document.querySelector('#btn-rnd')

btnPower.addEventListener('click', g('^'), false)

const factorial = function (num) {
  let x = 1
  let y = 1
  while (x < num) {
    y *= x
    x += 1
  }
  return y
}

btnFactorial.addEventListener('click', function () {
  if (number.value == '' && answer.textContent != '') {
    answer.textContent = factorial(n)
  } else {    
    answer.textContent = factorial(number.value)
  }
  number.value = ''
}, false)

btnLog.addEventListener('click', function () {  
  if (number.value == '' && answer.textContent != '') {
    answer.textContent = Math.log10(n)
  } else {    
    answer.textContent = Math.log10(number.value)
  }
  number.value = ''
}, false)
btnLn.addEventListener('click', function () {  
  if (number.value == '' && answer.textContent != '') {
    answer.textContent = Math.log(n)
  } else {    
    answer.textContent = Math.log(number.value)
  }
  number.value = ''
}, false)

btnPi.addEventListener('click', function () {
  number.value = Math.PI
}, false)
btnE.addEventListener('click', function () {
  number.value = Math.E
}, false)

btnDegRad.addEventListener('click', function () {
  deg = !deg
  if (deg) {
    btnDegRad.textContent = 'DEG'
  } else {
    btnDegRad.textContent = 'RAD'
  }
}, false)
btnRnd.addEventListener('click', function () {
  number.value = Math.round(Math.random() * 1000000000) / 1000000000
}, false)
