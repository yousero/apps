const apps = [
  {"name": "Calculator", "link": "./calculator/", "icon": null},
  {"name": "Snake", "link": "./snake/", "icon": null},
  {"name": "To-Do", "link": "./todo/", "icon": null},
  {"name": "Maze", "link": "./maze/", "icon": null},
  {"name": "Tables", "link": "./tables/", "icon": null},
  {"name": "Pomodoro", "link": "./pomodoro/", "icon": null},
  {"name": "Notes", "link": "./notes/", "icon": null},
  {"name": "Calendar", "link": "./calendar/", "icon": null},
  {"name": "Drawing Pad", "link": "./drawing/", "icon": null},
  {"name": "Currency Converter", "link": "./currency/", "icon": null},
  {"name": "BMI Calculator", "link": "./bmi/", "icon": null},
  {"name": "Quiz", "link": "./quiz/", "icon": null},
  {"name": "Password Generator", "link": "./password-generator/", "icon": null},
  {"name": "Unit Converter", "link": "./unit-converter/", "icon": null},
  {"name": "Stopwatch", "link": "./stopwatch/", "icon": null},
  {"name": "Tip Calculator", "link": "./tip-calculator/", "icon": null},
  {"name": "Word Counter", "link": "./word-counter/", "icon": null},
  {"name": "Weather", "link": "./weather/", "icon": null},
  {"name": "Clock", "link": "./clock/", "icon": null},
  {"name": "Memory Game", "link": "./memory/", "icon": null},
  {"name": "Minesweeper", "link": "./minesweeper/", "icon": null},
  {"name": "Piano", "link": "./piano/", "icon": null},
  {"name": "Palette", "link": "./palette/", "icon": null}
]

const grid = document.querySelector('.grid')

grid.innerHTML = ''

for (let app of apps) {
  let elm = document.createElement('div')
  elm.className = 'app'
  let a = document.createElement('a')
  a.href = app.link  
  a.title = app.name
  let icon = document.createElement('i')
  if (app.icon == null) {    
    icon.className = 'icon'
  } else {
    icon = document.createElement('img')
    icon.className = 'img-icon'
    icon.src = app.icon
  }
  a.appendChild(icon)
  let span = document.createElement('span')
  span.className = 'app-name'
  span.textContent = app.name
  a.appendChild(span)
  elm.appendChild(a)
  grid.appendChild(elm)
}

const search = document.querySelector('.search')
const appList = document.querySelectorAll('.app')

if (search) {
  search.addEventListener('input', function (e) {
    for (const card of appList) {
      if (search.value != '') {
        const text = search.value.toLocaleLowerCase()
        if (!card.textContent.toLocaleLowerCase().includes(text)) {
          card.classList.add('hidden')
        }
      } else {
        card.classList.remove('hidden')
      }
    }
  }, false)
}


