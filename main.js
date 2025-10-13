const dropAction = document.querySelector('.order__payment_pay')
const dropDown = document.querySelector('.order__check-row')
const arrowRotate = document.querySelector('.order__arrow')
const burger = document.querySelector('.header__burgermb')

dropAction.onclick = function () {
  dropDown.classList.toggle('close')
  arrowRotate.classList.toggle('rotate')
}

burger.onclick = function () {
  burger.classList.toggle('active')
}
