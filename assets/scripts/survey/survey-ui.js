'use strict'

const store = require('../store')
const showSurveysTemplate = require('../templates/survey.handlebars')

const clearSurveyModal = function () {
  $('#title').val('')
  // $('#q1').val('')
  // $('#q2').val('')
  // $('#q3').val('')
}

const createSurveySuccess = (data) => {
  console.log('createSurveySuccess')
}

const createSurveyFailure = (error) => {
  console.error(error)
}

const updateSurveySuccess = (data) => {
  // store.survey = data.survey
  console.log('updateSurveySuccess')
}

const updateSurveyFailure = (error) => {
  console.log('updateSurveySuccess, error = ', error)
  console.error(error)
}

const getSurveysSuccess = (data) => {
  const showSurveysHtml = showSurveysTemplate({ surveys: data.surveys })
  store.surveys = data.surveys
  console.log('>>>>> store.surveys = ', store.surveys)
  $('#surveys-content').html(showSurveysHtml)
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
// handlebars data
  // const showSurveysHtml = showSurveysTemplate({ surveys: data.survey })
  // const showSurveysHtml = showSurveysTemplate(data.survey)
  // $('.dynamic-content').html(showSurveysHtml) // .order
  // debugger;

// hide handlebars icons
  // $('.glyphicon').hide()
// show survey id in browser
  $('#default-display-text').text(data.survey.title)
  $('#survey_id').html(data.survey.id)
  $('#survey_id').val(data.survey.id)
  $('#survey_question').text(data.survey.question)
  $('#survey_owner').text(data.survey._owner)

  // $('#spacer1').text('List')
  // $('.errors-create-item').empty()
}

const getOneDynamicSurveyFailure = (error) => {
  console.error(error)
}

const deleteSurveySuccess = (data) => {
  // store.survey = data.survey
  console.log('deleteSurveySuccess')
}

const deleteSurveyFailure = (error) => {
  console.log('deleteSurveySuccess, error = ', error)
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
  getDynamicSurveysSuccess,
  getDynamicSurveysFailure,
  getOneDynamicSurveySuccess,
  getOneDynamicSurveyFailure,
  deleteSurveySuccess,
  deleteSurveyFailure
}
