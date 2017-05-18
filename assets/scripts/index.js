'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/events.js')
const surveyEvents = require('./survey/survey-events.js')
// on document ready return surveys
const api = require('./survey/survey-api')
const ui = require('./survey/survey-ui')

$(() => {
  setAPIOrigin(location, config)
  $('#password1, #password2').keyup(authEvents.checkPass)

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

  authEvents.addHandlers()
  surveyEvents.addHandlers()
  $('.form-control').val('')  // This clears out all the form input fields when the document is first loaded
  $('#signUpModal').hide()
  $('.nav-btns').hide()
  $('.create-a-survey').hide()
  $('.update-a-survey').hide()
  $('.get-surveys').hide()
})

// query parameters from URL
$(document).ready(function () {
// Check if the URL parameter is apples
  const dc = surveyEvents.dynamicContent
  console.log(dc)
  if (dc[0] === 'apples') {
    $('#apples').show()
  } else if (dc[0] === 'oranges') { // Check if the URL parameter is oranges
    $('#oranges').show()
  } else if (dc[0] === 'respondents' && dc[1] !== undefined) { // Check if the URL parameter is bananas
    $('#respondents').show()
    api.getOneDynamicSurvey(dc[1])
      // .then(function (data) {
      //   ui.getDynamicSurveysSuccess(data)
      // })
      .then(ui.getOneDynamicSurveySuccess)
      .catch(ui.getOneDynamicSurveyFailure)

      // api.getDynamicSurveys()
      //   // .then(function (data) {
      //   //   ui.getDynamicSurveysSuccess(data)
      //   // })
      //   .then(ui.getDynamicSurveysSuccess)
      //   .catch(ui.getDynamicSurveysFailure)
    // Check if the URL parmeter is empty or not defined, display default content
  } else {
    $('#default-content').show()
  }
})
