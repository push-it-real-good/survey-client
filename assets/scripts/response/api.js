'use strict'

const config = require('../config')
const store = require('../store')

const createResponse = (data) => {
  // console.log('createResponse(), token = ', store.user.token)
  console.log('createResponse(), data = ', data)
  return $.ajax({
    url: config.apiOrigin + '/responses',
    method: 'POST',
    data: data // ,
    // headers: {
    //   Authorization: 'Token token=' + store.user.token
    // }
  })
}

const getResponses = function () {
  console.log('getResponses(), token = ', store.user.token)
  return $.ajax({
    url: config.apiOrigin + '/responses',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  //
//  do we need to add in data for the survey_id???
  //
  })
}

// const getResponses = function (dc) {
//   return $.ajax({
//     url: config.apiOrigin + '/' + dc,
//     method: 'GET',
    // headers: {
    //   Authorization: 'Token token=' + store.user.token
    // }
//   })
// }

// Exported since used in other code like events.js
module.exports = {
  createResponse,
  getResponses
}
