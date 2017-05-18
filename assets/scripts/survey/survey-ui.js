'use strict'

const store = require('../store')
// const showSurveysTemplate = require('../templates/survey-listing.handlebars')
const showSurveysTemplate = require('../templates/survey.handlebars')
// const api = require('./api.js') // has ajax codes that connect to the backend

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

// READ / GET
const getSurveysSuccess = (data) => {
  // store.user = data.user
  console.log(data)
  console.log(data.surveys[0])
  console.log('title:', data.surveys[0].title)
  console.log('url:', data.surveys[0].url)
  console.log('_owner:', data.surveys[0]._owner)
  console.log('length:', data.surveys[0].length)
  const showSurveysHtml = showSurveysTemplate({ surveys: data.surveys })
  // debugger;
  $('.content').html(showSurveysHtml) // .order
  // $('.errors-create-item').empty()
  // $('#create-item').show()
  // $('#spacer1').text('List')
}

const getSurveysFailure = (error) => {
  console.error(error)
}

module.exports = {
  clearSurveyModal,
  createSurveySuccess,
  createSurveyFailure,
  updateSurveySuccess,
  updateSurveyFailure,
  getSurveysSuccess,
  getSurveysFailure
}
