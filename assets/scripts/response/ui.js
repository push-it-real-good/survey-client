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
    // console.log('Data Boolean: ', data.responses)

    $('#responses-content').show()
    $('#responses-content').html(showResponsesHtml)
    // console.log('object_Length: ', data.responses.length)
    let yesAnswers = 0
    let noAnswers = 0
    let ratingAnswers1 = 0
    let ratingAnswers2 = 0
    let ratingAnswers3 = 0
    let ratingAnswers4 = 0
    let ratingAnswers5 = 0
    let totalRatingCount = 0

    for (let i = 0; i < data.responses.length; i++) {
      // Boolean Counts
      if (data.responses[i].boolean === true) {
        yesAnswers++
        const total = Number(data.responses.length)
        const yesAnswersResponseNum = Number(yesAnswers)
        const yesAnswerspercent = ((yesAnswersResponseNum / total) * 100)

        $(`.count-true`).text(`${yesAnswers} respondent(s) selected "YES"`)
        $(`.count-true-percent`).text(`${yesAnswerspercent}% of respondents selected "YES"`)
      } else if (data.responses[i].boolean === false) {
        noAnswers++
        const total = Number(data.responses.length)
        const noAnswersResponseNum = Number(noAnswers)
        const noAnswerspercent = ((noAnswersResponseNum / total) * 100)

        $(`.count-false`).text(`${noAnswers} respondent(s) selected "NO"`)
        $(`.count-false-percent`).text(`${noAnswerspercent}% of respondents selected "NO"`)
      }

      // Rating Counts

      if (data.responses[i].rating) {
        const total = Number(data.responses.length)
        if (data.responses[i].rating === 1) {
          ratingAnswers1++
          const ratingAnswers1ResponseNum = Number(ratingAnswers1)
          totalRatingCount = (totalRatingCount + 1)
          const ratingAnswers1percent = ((ratingAnswers1ResponseNum / total) * 100)

          $(`.ratingAnswers1`).text(`${ratingAnswers1} respondent(s) selected "1"`)
          $(`.ratingAnswers1percent`).text(`${ratingAnswers1percent}% of respondents selected "1"`)
        } else if (data.responses[i].rating === 2) {
          ratingAnswers2++
          const ratingAnswers2ResponseNum = Number(ratingAnswers2)
          totalRatingCount = (totalRatingCount + 2)

          const ratingAnswers2percent = ((ratingAnswers2ResponseNum / total) * 100)
          $(`.ratingAnswers2`).text(`${ratingAnswers2} respondent(s) selected "2"`)
          $(`.ratingAnswers2percent`).text(`${ratingAnswers2percent}% of rrespondents selected "2"`)
        } else if (data.responses[i].rating === 3) {
          ratingAnswers3++
          const ratingAnswers3ResponseNum = Number(ratingAnswers3)
          totalRatingCount = (totalRatingCount + 3)
          const ratingAnswers3percent = ((ratingAnswers3ResponseNum / total) * 100)

          $(`.ratingAnswers3`).text(`${ratingAnswers3} respondent(s) selected "3"`)
          $(`.ratingAnswers3percent`).text(`${ratingAnswers3percent}% of respondents selected "3"`)
        } else if (data.responses[i].rating === 4) {
          ratingAnswers4++
          const ratingAnswers4ResponseNum = Number(ratingAnswers4)
          totalRatingCount = (totalRatingCount + 4)
          const ratingAnswers4percent = ((ratingAnswers4ResponseNum / total) * 100)
          $(`.ratingAnswers4`).text(`${ratingAnswers4} respondent(s) selected "4"`)
          $(`.ratingAnswers4percent`).text(`${ratingAnswers4percent}% of respondents selected "4"`)
        } else if (data.responses[i].rating === 5) {
          ratingAnswers5++
          const ratingAnswers5ResponseNum = Number(ratingAnswers5)
          totalRatingCount = (totalRatingCount + 5)
          const ratingAnswers5percent = ((ratingAnswers5ResponseNum / total) * 100)
          $(`.ratingAnswers5`).text(`${ratingAnswers5} respondent(s) selected "5"`)
          $(`.ratingAnswers5percent`).text(`${ratingAnswers5percent}% of respondents selected "5"`)
        }
        const ratingAverage = (totalRatingCount / total)
        $(`.ratingAverage`).text(`Average Rating for this Survey Question: ${ratingAverage} `)
      }
      // if (data.responses[i].text) {
      //     cont out = []
      //     let counts={}
      //   const item = arr[i]
      //   counts[item] = counts[item] >= 1 ? counts[item] + 1 : 1
      //   if (counts[item] === 2) {
      //     out.push(item)
      //   }
      //   $(`.textDuplicate`).text(`Duplicate Responses: ${out}`)
      // }
    }
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
