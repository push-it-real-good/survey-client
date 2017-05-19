'use strict'

const store = require('../store')
const showResponsesTemplate = require('../templates/response.handlebars')

const createResponseSuccess = (data) => {
  // console.log('createResponseSuccess')
  $('#response-list-table').hide()
  $('#default-display-text').text('Thanks for taking the survey! ¯\\_(ツ)_/¯')
}

const createResponseFailure = () => {
  // console.error(error)
}

const getResponsesSuccess = (data) => {
  // console.log('data after api call', data)
  const showResponsesHtml = showResponsesTemplate({ responses: data.responses })
  store.responses = data.responses
  // console.log('>>>>> store.responses = ', store.responses)
  $('#responses-content').html(showResponsesHtml)
}

const getResponsesFailure = () => {
  // console.error(error)
}

module.exports = {
  createResponseSuccess,
  createResponseFailure,
  getResponsesSuccess,
  getResponsesFailure
}
