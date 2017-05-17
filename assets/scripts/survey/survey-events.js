'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./survey-api')
const ui = require('./survey-ui')
// const authUi = require('../auth/ui')
const store = require('../store')

const onCreateSurvey = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  console.log('onCreateSurvey: data = ', data)
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
}

const onUpdateSurvey = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  console.log('onUpdateSurvey: data = ', data)
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
}

const updateItem = function () {
  event.preventDefault()
  const id = $(this).attr('data-id')
  console.log('updateItem() : id is: ' + id)
  populateUpdateForm(id)
}

const populateUpdateForm = function (id) {
  const survey = findSurveyById(id)

  $('#survey-id').val(survey.id)
  $('#survey-title').val(survey.title)
  $('#survey-q1').val(survey.questionOne)
  onShowUpdateSurvey()
}

const findSurveyById = function (idToCompare) {
  let result
  let i
  for (i in store.survey) {
    const id = store.survey[i].id
    if (id - idToCompare === 0) {
      return store.survey[i]
    }
  }
  result
}

const onShowUpdateSurvey = function () {
  $('.update-a-survey').hide()
}

const addHandlers = () => {
  $('#create-survey').on('submit', onCreateSurvey)
  $('#update-survey').on('submit', onUpdateSurvey)
  $(document).on('click', '.update-survey', updateItem)
}

module.exports = {
  addHandlers
}
