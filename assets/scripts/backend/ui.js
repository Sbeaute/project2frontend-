 //const require ()

const showInventoriessuccess = function (data) {
  $('#display').text(JSON.stringify(data))
  //$('#display').css('display',)

  console.log(data)
  $('.modal-body').html('your inventory is now display')
  $('#myModalLabel').html('showInventoriessuccess')
  $('#myModal').modal('show')
}

  const failure = function (error) {
    console.log(error)
  }

const deleteInventoriesSuccess = function () {
  console.log('you have deleted a inventory')
  $('.modal-body').html('gone but not forgotten you have deleted from your Inventories')
  $('#myModalLabel').html('deleteInventoriesSuccess')
  $('#myModal').modal('show')
}

const updateInventoriesSuccess = function () {
console.log('new inventory have been updated')
$('.modal-body').html('keep building.. you have updated your Inventories')
  $('#myModalLabel').html('updateInventoriesSuccess')
  $('#myModal').modal('show')
}

const createInventoriesSuccess = function () {
console.log('you have created a inventory')
$('.modal-body').html('A masterpiece has been added to your Inventories ')
  $('#myModalLabel').html('createInventoriesSuccess')
  $('#myModal').modal('show')
}

module.exports = {
showInventoriessuccess,
failure,
deleteInventoriesSuccess,
updateInventoriesSuccess,
createInventoriesSuccess
}
