 //const require ()

const showInventoriessuccess = function (data) {
  $('#display').text(JSON.stringify(data))
  //$('#display').css('display',)

  console.log(data)
}

  const failure = function (error) {
    console.log(error)
  }




module.exports = {
  showInventoriessuccess,
  failure
}
