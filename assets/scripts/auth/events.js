'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')

const onSignUpClick = function (event) {
  $('#signUpModal').show()

  document.getElementById('password2').onkeyup = function () {
    const pass1 = document.getElementById('password1')
    const pass2 = document.getElementById('password2')
    const message = document.getElementById('confirmMessage')

    const badColor = '#ff6666'
    const goodColor = '#66cc66'
  // const goodColor = '#CCE4D5'
  // const badColor = '#F8C6C0'
    if (pass1.value === pass2.value) {
      document.getElementById('chpw-submit').disabled = false
      pass2.style.backgroundColor = goodColor
      message.style.color = goodColor
      message.innerHTML = 'Passwords Match!'
    } else {
      document.getElementById('chpw-submit').disabled = true
      pass2.style.backgroundColor = badColor
      message.style.color = badColor
      message.innerHTML = 'Enter matching password!'
    }

    if (pass1.value === ('')) {
      document.getElementById('chpw-submit').disabled = true
      message.innerHTML = 'Enter matching password!'
    }
  }

  $('#sign-up').trigger('reset')
  $('#sign-in').trigger('reset')
  $('#signInModal').hide()
}

const onSignInClick = function (event) {
  $('#signUpModal').hide()
  $('#sign-up').trigger('reset')
  $('#sign-in').trigger('reset')
  $('#signInModal').show()
}

const onSignUp = function (event) {
  const data = getFormFields(this)
  event.preventDefault()

  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.changePassword(data)
  .then(ui.changePasswordSuccess)
  .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
  .then(ui.signOutSuccess)
  .catch(ui.signOutFailure)
}

const addHandlers = () => {
  $('#sign-up-form').on('click', onSignUpClick)
  $('#return-to-log-in').on('click', onSignInClick)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-up').on('submit', onSignUp)
  $('#sign-out').on('click', onSignOut)
  $('#change-password').on('submit', onChangePassword)
}

module.exports = {
  addHandlers
}
