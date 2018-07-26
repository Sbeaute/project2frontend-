const api = require('./api')
//const ui = require('../auth/ui')
const ui2 = require('./ui')
const getFormFields = require('../../../lib/get-Form-fields.js')
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

const deleteInventories = function (event) {
event.preventDefault()
const data = $('#inv-del').val()
  console.log(data)

api.deleteinventories(data)
.then (ui2.deleteInventoriessuccess)
.catch(ui2.failure)
}

const updateInventories = function (event) {
event.preventDefault()
  const invId = $('#inv-up-id').val()
  const invBrand = $('#inv-up-brand').val()
  const invModel = $('#inv-up-model').val()
  const invImg = $('#inv-up-imgurl').val()
  // const inventories = data.inventories
  //  if (inventories.title === '') {
  //    // alert('title required')
  //    $('#content').html('<p>Title is required</p>')
  //    $('#content').css('background-color', 'red')
  //    return false
  //  }
  //  if (inventories.id.length !== 0) {
api.updateinventories(invId, invBrand, invModel, invImg)
.then(ui2.oupdateInventoriesSuccess)
.catch(ui2.failure)
  }

  // else {
  //   console.log('Please provide a inventories id!')

const createInventories = function (event) {
event.preventDefault()
const data =getFormFields(event.target)
}



const addHandlers = () => {
$('#get-inventories').on('click', showInventories)
$('#delete-inventories').on('submit', deleteInventories)
$('#update-inventories').on('submit', updateInventories)
$('#create-inventories').on('submit', createInventories)
}

module.exports = {
addHandlers
}
