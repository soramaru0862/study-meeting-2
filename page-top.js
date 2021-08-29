'use-strict'

const pageTop = document.getElementById('page_top')

pageTop.addEventListener('click', () => {
  window.scroll({
    top: 0,
    behavior: 'smooth'
  })
})

const pageTopShow = document.querySelector('.page-top')
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    pageTopShow.classList.add('show')
  } else {
    pageTopShow.classList.remove('show')
  }
})
