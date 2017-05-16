'use strict'

const store = require('../store.js')
// const jobsEvents = require('../jobs/events.js')

const signUpSuccess = (data) => {
  $('#signUpModal').hide()
  $('#signInModal').show()
  $('.header-message').show().html('Congratulations, you have a new account.')
  $('.sign-in-msg').html('Log in.')
  $('#sign-in').trigger('reset')
}

const signUpFailure = (error) => {
  $('#signUpError').show().html('Something\'s wrong. Try again.')
  setTimeout(function () {
    $('#signUpError').fadeOut(900)
  }, 1000)
  $('#sign-up').trigger('reset')
  console.error('SignUp failed ran data is:', error)
}

const signInSuccess = (data) => {
  store.user = data.user
  // console.log(store.user)
  // jobsEvents.getJobs()

  $('.navbar').show()
  $('.nav-btns').show()
  $('.task-work-flow').show()
  $('#signUpModal').hide()
  $('.header-message').hide()
  $('#signInModal').hide()
  $('#salutaion-message').html('Family Camp Checklist')
  $('.nav-message').hide()
  $('#ChangePasswordSuccess').hide()
  $('#change-password').trigger('reset')
}

const signInFailure = (error) => {
  $('#signInError').show().html('Something\'s wrong with your login. Try again.')
  setTimeout(function () {
    $('#signInError').fadeOut(700)
  }, 1000)
  $('#sign-in').trigger('reset')
  console.error('signIn failed ran data is:', error)
}

const signOutSuccess = () => {
  store.user = null
  $('#confirm-logout').modal('hide')
  $('.nav-btns').hide()
  $('.task-work-flow').hide()
  $('#signUpModal').hide()
  $('#signUpModal').trigger('reset')
  $('#signInModal').trigger('reset')
  $('.form-control').val('')
  $('#signInModal').show()
}

const signOutFailure = (error) => {
  $('#change-password').trigger('reset')
  console.error('signOutFailure ran:', error)
}

const changePasswordSuccess = () => {
  $('#ChangePasswordError').hide()
  $('#ChangePasswordSuccess').show().html('Password changed! Close Modal to continue.')
  $('#change-password').trigger('reset')
  $('.form-group-pw').hide()
}

const changePasswordFailure = (error) => {
  $('#ChangePasswordError').show().html('Check your password and try again.')
  setTimeout(function () {
    $('#ChangePasswordError').fadeOut(700)
  }, 1000)
  $('#change-password').trigger('reset')
  console.error('changePasswordFailure ran:', error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
