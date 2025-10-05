const dropAction = document.querySelector('.order__payment_pay')
const dropDown = document.querySelector('.order__check-row')
const arrowRotate = document.querySelector('.order__arrow')

dropAction.onclick = function () {
  dropDown.classList.toggle('close')
  arrowRotate.classList.toggle('rotate')
}
