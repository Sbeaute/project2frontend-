 //const require ()

const showInventoriessuccess = function (data) {
  $('#display').text(JSON.stringify(data))
  //$('#display').css('display',)

  console.log(data)
}

  const failure = function (error) {
    console.log(error)
  }

const deleteInventoriesSuccess = function () {
  console.log('you have deleted a inventory')
}

const updateInventoriesSuccess = function () {
console.log('you have successfully deleted a inventory')
}

const createInventoriesSuccess = function () {
console.log('you have created a inventory')
// $('#content').html('You created a new inventory')
}

module.exports = {
showInventoriessuccess,
failure,
deleteInventoriesSuccess,
updateInventoriesSuccess,
createInventoriesSuccess
}
