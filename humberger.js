'use strict'

const btn = document.getElementById('btn')
const nav = document.querySelector('.nav')
const bg = document.querySelector('.background')

btn.addEventListener('click', () => {
  nav.classList.toggle('show')
  bg.classList.toggle('show')
  btn.classList.toggle('show')
})
