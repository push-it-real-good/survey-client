'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./survey-api')
const ui = require('./survey-ui')
// const authUi = require('../auth/ui')
const store = require('../store')

const onCreateSurvey = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.createSurvey(data)
  .then(function (data) {
    ui.createSurveySuccess(data)
    $('#createSurvey').modal('hide')
  })
  .catch(ui.createSurveyFailure)
  // Clear out existing text in modal text boxes when there is a failure
  // source: http://stackoverflow.com/questions/31022950/how-clear-bootstrap-modal-on-hide
  $('#createSurvey').on('hidden.bs.modal', function () {
    $(this).find('input,textarea,select').val('').end()
  })
  ui.clearSurveyModal()
  onGetSurveys()
  // console.log('++++ onCreateSurvey(), token = ', store.user.token)
}

const onUpdateSurvey = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  // console.log('>>>>>>>>onUpdateSurvey: data = ', data)
  api.updateSurvey(data)
  .then(function (data) {
    ui.updateSurveySuccess(data)
    $('#updateSurvey').modal('hide')
  })
  .catch(ui.updateSurveyFailure)
  // Clear out existing text in modal text boxes when there is a failure
  // source: http://stackoverflow.com/questions/31022950/how-clear-bootstrap-modal-on-hide
  $('#updateSurvey').on('hidden.bs.modal', function () {
    $(this).find('input,textarea,select').val('').end()
  })
  ui.clearSurveyModal()
  onGetSurveys()
}

const updateItem = function () {
  event.preventDefault()
  const id = $(this).attr('data-id')
  // console.log('updateItem() : id is: ' + id)
  populateUpdateForm(id)
}

const populateUpdateForm = function (id) {
  const survey = findSurveyById(id)
  // console.log('>> survey.title is ', survey.title)
  $('#surveyId').val(survey.id)
  $('#surveyTitle').val(survey.title)
  $('#surveyQ1').val(survey.question)
  onShowUpdateSurvey()
}

const findSurveyById = function (idToCompare) {
  let result
  let i
  for (i in store.surveys) {
    const id = store.surveys[i].id
    if (id === idToCompare) {
      return store.surveys[i]
    }
  }
  result
}

const onShowUpdateSurvey = function () {
  $('#updateSurvey').modal('show')
}

const onGetSurveys = (event) => {
  api.getSurveys()
    .then(ui.getSurveysSuccess)
    .catch(ui.getSurveysFailure)
}

function getParameterByName () {
  // print url
  // console.log(window.location.href)
  // true or false, there are parameters as indicated by a "?"
  // console.log(window.location.href.split('?')[1] === undefined)
  if (window.location.href.split('?')[1] === undefined) {
    return ''
  } else {
    const arr = $.map(window.location.href.split('?')[1].split('&'), function (e, i) {
      return e.split('=')[1]
    })
    // console.log('array: ', arr)
    // console.log('survey_id: ', arr[1])
    // console.log('parameters, will load Respondent Page')
    return arr
  }
}
// Give the parameter a variable name, to be passed to index.js
const dynamicContent = getParameterByName()

const deleteItem = function () {
  event.preventDefault()
  const id = $(this).attr('data-id')
  // console.log('deleteItem() : id is: ' + id)
  api.deleteSurvey(id)
    .done(ui.deleteSurveySuccess)
    .fail(ui.deleteSurveyFailure)
  onGetSurveys()
}

const addHandlers = () => {
  $('#create-survey').on('submit', onCreateSurvey)
  $('#update-survey').on('submit', onUpdateSurvey)
  $(document).on('click', '.update-survey', updateItem)
  $(document).on('click', '#get-survey-button', onGetSurveys)
  $(document).on('click', '.remove-survey', deleteItem)
}

module.exports = {
  addHandlers,
  dynamicContent
}
