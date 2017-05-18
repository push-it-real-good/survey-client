'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')
// const authUi = require('../auth/ui')
const store = require('../store')

const onCreateResponse = function (event) {
  event.preventDefault()
  console.log('createresponse')

  const data = getFormFields(this)
  console.log(data)
  api.createResponse(data)
  .then(function (data) {
    ui.createResponseSuccess(data)
  })
  .catch(ui.createResponseFailure)
  console.log('++++ onCreateResponse(), token = ', store.user.token)
}

const addHandlers = () => {
  $('#create_response').on('submit', onCreateResponse)
}

module.exports = {
  addHandlers
}
