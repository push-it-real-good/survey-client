'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')
// const authUi = require('../auth/ui')
// const store = require('../store')

const onCreateResponse = function (event) {
  event.preventDefault()
  console.log('createresponse')
  console.log($(this).attr('data-id'))
  const fieldData = getFormFields(this).response.text
  console.log(fieldData)
  // console.log(fieldData.response.text)
  // console.log(data)
  // let string = {}
  const data = {
    'response': {
      'text': fieldData,
      'survey_id': $(this).attr('data-id')
    }
  }
  console.log(data)
  // console.log('string ', string)

  // data '{
  //   "response": {
  //     "text": "'"${TEXT}"'",
  //     "survey_id": "'"${SURVEYID}"'"
  //   }
  // }'

  api.createResponse(data)
  .then(function (data) {
    ui.createResponseSuccess(data)
  })
  .catch(ui.createResponseFailure)
  // console.log('++++ onCreateResponse(), token = ', store.user.token)
}

const onGetResponses = function (event) {
  event.preventDefault()
  // console.log('woah')
  // console.log('this:', this)
  // console.log('event:', event)
  // const string = this.id
  // const data = this
  let string = {}
  string = { // should this be a constructor function to have one for each play?
    'survey_id': this.id
  }
  // console.log('string ', string)

  api.getResponses(string)
    // .then(ui.getResponsesSuccess)
    // .catch(ui.getResponsesFailure)
  .then(function (data) {
    ui.getResponsesSuccess(data)
  })
  .catch(ui.getResponsesFailure)
}

const addHandlers = () => {
  $('#create-response').on('submit', onCreateResponse)
  $(document).on('click', '.dashboard-button', onGetResponses)
}

module.exports = {
  addHandlers
}
