'use strict'

const modal = document.getElementById('modal')
const show = document.getElementById('modal_show')
const close = document.getElementById('modal_close')
const background = document.getElementById('modal_background')

show.addEventListener('click', () => {
  modal.classList.add('is-show')
  background.classList.add('is-show')
})

close.addEventListener('click', () => {
  modal.classList.remove('is-show')
  background.classList.remove('is-show')
})

background.addEventListener('click', () => {
  modal.classList.remove('is-show')
  background.classList.remove('is-show')
})
