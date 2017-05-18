'use strict'

const store = require('../store')
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

// const getResponsesSuccess = (data) => {
//   // store.user = data.user
//   console.log(data)
//   console.log(data.responses[0])
//   console.log('text:', data.responses[0].text)
//   console.log('title:', data.responses[0].title)
//   console.log('survey_id:', data.responses[0].survey_id)
//   console.log('question_id:', data.responses[0].question_id)
//   console.log('respondent_id:', data.responses[0].respondent_id)
//   const showSurveysHtml = showSurveysTemplate({ responses: data.responses })
//   // debugger;
//   $('.content').html(showSurveysHtml) // .order
//   // $('.errors-create-item').empty()
//   // $('#create-item').show()
//   // $('#spacer1').text('List')
// }
//
// const getResponsesFailure = (error) => {
//   console.error(error)
// }

const getDynamicSurveysSuccess = (data) => {
  // store.user = data.user
  console.log(data)
  console.log(data.surveys[0])
  console.log('title:', data.surveys[0].title)
  console.log('url:', data.surveys[0].url)
  console.log('_owner:', data.surveys[0]._owner)
  console.log('length:', data.surveys[0].length)
  console.log('length:', data.surveys[0].question)
  const showSurveysHtml = showSurveysTemplate({ surveys: data.surveys })
  // debugger;
  $('.dynamic-content').html(showSurveysHtml) // .order
  // $('.errors-create-item').empty()
  // $('#create-item').show()
  // $('#spacer1').text('List')
}

const getDynamicSurveysFailure = (error) => {
  console.error(error)
}

const getOneDynamicSurveySuccess = (data) => {
  // store.user = data.user
  console.log(data)
  console.log(data.survey)
  // console.log(data.surveys[0])
  console.log('title:', data.survey.title)
  console.log('id:', data.survey.id)
  console.log('url:', data.survey.url)
  console.log('_owner:', data.survey._owner)
  console.log('length:', data.survey.length)
  console.log('question:', data.survey.question)
  // const showSurveysHtml = showSurveysTemplate({ survey: data.survey })
  const showSurveysHtml = showSurveysTemplate(data.survey)
  // debugger;
  $('.dynamic-content').html(showSurveysHtml) // .order
  // $('.errors-create-item').empty()
  $('.glyphicon').hide()
  $('#spacer1').text('List')
}

const getOneDynamicSurveyFailure = (error) => {
  console.error(error)
}

module.exports = {
  clearSurveyModal,
  createSurveySuccess,
  createSurveyFailure,
  updateSurveySuccess,
  updateSurveyFailure,
  getSurveysSuccess,
  getSurveysFailure,
  // getResponsesSuccess,
  // getResponsesFailure
  getDynamicSurveysSuccess,
  getDynamicSurveysFailure,
  getOneDynamicSurveySuccess,
  getOneDynamicSurveyFailure
}
