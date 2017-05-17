'use strict'

// const store = require('../store')
// const showChoresTemplate = require('../templates/chore-listing.handlebars')
const store = require('../store')

const clearSurveyModal = function () {
  $('#title').val('')
  $('#q1').val('')
  // $('#q2').val('')
  // $('#q3').val('')
}

const createSurveySuccess = (data) => {
  store.user = data.user
}

const createSurveyFailure = (error) => {
  console.error(error)
}

const updateSurveySuccess = (data) => {
  store.user = data.user
}

const updateSurveyFailure = (error) => {
  console.error(error)
}
module.exports = {
  clearSurveyModal,
  createSurveySuccess,
  createSurveyFailure,
  updateSurveySuccess,
  updateSurveyFailure

}
