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
  return $.ajax({
    url: config.apiOrigin + '/surveys',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getOneSurvey = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/surveys/' + data.survey.id,
    method: 'GET',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateSurvey = (data) => {
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
  return $.ajax({
    url: config.apiOrigin + '/surveys/' + id,
    method: 'DELETE',
    // data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// Exported since used in other code like events.js
module.exports = {
  createSurvey,
  getSurveys,
  updateSurvey,
  deleteSurvey,
  getOneSurvey
}
