'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)

  $('#add-task-modal').on('hidden.bs.modal', function () {
    $(this).find('input,textarea,select').val('').end()
  })
  $('#changePasswordModal').on('hidden.bs.modal', function () {
    $(this).find('input,textarea,select').val('').end()
    $('#ChangePasswordError').hide()
    $('#ChangePasswordSuccess').hide()
    $('.form-group-pw').show()
  })
  $('#signUpModal').on('hidden.bs.modal', function () {
    $(this).find('input,textarea,select').val('').end()
    $('#signInError').hide()
  })
  $('#signInModal').on('hidden.bs.modal', function () {
    $(this).find('input,textarea,select').val('').end()
    $('#signUpError').hide()
    $('#signUpSuccess').hide()
  })
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')

const authEvents = require('./auth/events.js')
// const jobsEvents = require('./jobs/events.js')

// on document ready
$(() => {
  authEvents.addHandlers()
  // jobsEvents.addHandlers()
  $('.form-control').val('')
  $('#signUpModal').hide()
  $('.navbar').hide()
  $('.task-work-flow').hide()
  $('#password2').keyup(authEvents.validate)
})
