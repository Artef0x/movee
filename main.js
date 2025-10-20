const dropAction = document.querySelector('.order__payment_pay')
const dropDown = document.querySelector('.order__check-row')
const arrowRotate = document.querySelector('.order__arrow')
const burger = document.querySelector('.header__burger')
const menuLink = document.querySelector('.header__link')
const bodyLock = document.querySelector('body')

dropAction.addEventListener('click', function () {
  dropDown.classList.toggle('close')
  arrowRotate.classList.toggle('rotate')
})

burger.addEventListener('click', function () {
  burger.classList.toggle('active')
  menuLink.classList.toggle('active')
  bodyLock.classList.toggle('lock')
})
