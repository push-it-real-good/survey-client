'use strict'

const config = require('../config')
const store = require('../store')

const createSurvey = (data) => {
  console.log('createSurvey(), token = ', store.user.token)
  console.log('createSurvey(), data = ', data)
  return $.ajax({
    url: config.apiOrigin + '/surveys',
    method: 'POST',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getSurveys = function () {
  console.log('getSurveys(), token = ', store.user.token)
  return $.ajax({
    url: config.apiOrigin + '/surveys',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateSurvey = (data) => {
  console.log('updateSurvey(), token = ', store.user.token)
  console.log('updateSurvey(), data = ', data)
  return $.ajax({
    url: config.apiOrigin + '/surveys/' + data.survey.id,
    method: 'PATCH',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteSurvey = (id) => {
  console.log('deleteSurvey(), token = ', store.user.token)
  return $.ajax({
    url: config.apiOrigin + '/surveys/' + id,
    method: 'DELETE',
    // data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getDynamicSurveys = function () {
  return $.ajax({
    url: config.apiOrigin + '/surveys',
    method: 'GET' // ,
    // headers: {
    //   Authorization: 'Token token=' + 'abc'
    // }
  })
}

const getOneDynamicSurvey = (surveyId) => {
  return $.ajax({
    url: config.apiOrigin + '/surveys/' + surveyId,
    method: 'GET' // ,
    // data: surveyId // ,
    // headers: {
    //   Authorization: 'Token token=' + 'abc'
    // }
  })
}

// Exported since used in other code like events.js
module.exports = {
  createSurvey,
  getSurveys,
  updateSurvey,
  deleteSurvey,
  // getResponses,
  getDynamicSurveys,
  getOneDynamicSurvey
}
