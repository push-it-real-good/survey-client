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
  $('#responses-content').hide()
  $('#responses-content-text').hide()
  // console.log(data)
  // console.log(data.responses)
  // console.log(data.responses.length)
  // console.log(data.responses[0])
  // if (data.responses.length !== undefined)
  if (data.responses[0] !== undefined) {
    // console.log('data after api call', data)
    const showResponsesHtml = showResponsesTemplate({ responses: data.responses })
    store.responses = data.responses
    // console.log('>>>>> store.responses = ', store.responses)
    $('#responses-content').show()
    $('#responses-content').html(showResponsesHtml)
  } else {
    store.responses = data.responses
    $('#responses-content-text').show()
    $('#responses-content-text').text('you have no responses (╯°□°）╯︵ ┻━┻')
  }
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
