const search = document.querySelector('.search')
const contacts = document.querySelectorAll('.app')

if (search) {
  search.addEventListener('input', function (e) {
    for (const c of contacts) {
      if (search.value != '') {
        const text = search.value.toLocaleLowerCase()
        if (!c.textContent.toLocaleLowerCase().includes(text)) {
          c.classList.add('hidden')
        }
      } else {
        c.classList.remove('hidden')
      }
    }
  }, false)
}
