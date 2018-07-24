const api = require('./api')
const ui = require('../auth/ui')

const getinventories = function (event) {
  //event.preventDefault()
  console.log('sign up ran!')


  api.getUserinventories()
    .then((result) => {
      ui.signUpSuccess
      console.log(result)
    })
    .catch(ui.signUpFailure)
}




const addHandlers = () => {
  $('#get-inventories').on('click', getinventories)

}

module.exports = {
addHandlers
}
