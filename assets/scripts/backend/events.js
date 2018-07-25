const api = require('./api')
//const ui = require('../auth/ui')
const ui2 = require('./ui')
// const getinventories = function (event) {
//   //event.preventDefault()
//   console.log('sign up ran!')
//
//
//   api.getUserinventories()
//     .then((result) => {
//       ui.signUpSuccess
//       console.log(result)
//     })
//     .catch(ui.signUpFailure)
// }

const showInventories = function (event) {
event.preventDefault()
  console.log (event)

api.showinventories()
.then (ui2.showInventoriessuccess)
.catch(ui2.failure)
}


const addHandlers = () => {
  $('#get-inventories').on('click', showInventories)
// $('#show')
}

module.exports = {
addHandlers
}
