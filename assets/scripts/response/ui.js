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
  console.log('data after api call', data)
  const showResponsesHtml = showResponsesTemplate({ responses: data.responses })
  store.responses = data.responses
  console.log('>>>>> store.responses = ', store.responses)
  $('#responses-content').html(showResponsesHtml)
}

const getResponsesFailure = (error) => {
  console.error(error)
}

// const getResponsesSuccess = (data) => {
//   // store.user = data.user
//   console.log(data)
//   console.log(data.responses[0])
//   console.log('text:', data.responses[0].text)
//   console.log('title:', data.responses[0].title)
//   console.log('response_id:', data.responses[0].response_id)
//   console.log('question_id:', data.responses[0].question_id)
//   console.log('respondent_id:', data.responses[0].respondent_id)
//   const showResponsesHtml = showResponsesTemplate({ responses: data.responses })
//   // debugger;
//   $('.content').html(showResponsesHtml) // .order
//   // $('.errors-create-item').empty()
//   // $('#create-item').show()
//   // $('#spacer1').text('List')
// }
//
// const getResponsesFailure = (error) => {
//   console.error(error)
// }

module.exports = {
  createResponseSuccess,
  createResponseFailure,
  getResponsesSuccess,
  getResponsesFailure
}
