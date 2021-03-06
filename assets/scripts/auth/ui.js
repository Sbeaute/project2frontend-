'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  $('#message').text('Signed up successfully')
  $('#message').css('background-color', 'green')
  console.log('signUpSuccess ran. Data is :', data)
  $('#sign-up').css('display', 'none')
  $('.modal-body').html('new inventory user welcome')
  $('#myModalLabel').html('Sign In')
  $('#myModal').modal('show')
  $('#sign-in').css('display', '')
  $('#sign-in').css('display', 'none')
}

const signUpFailure = function (error) {
  $('#message').text('Error on sign up')
  $('#message').css('background-color', 'red')
  console.error('signUpFailure ran. Error is :', error)
}

const signInSuccess = function (data) {
  //$('#message').text('Signed in successfully')
  //$('#message').css('background-color', 'green')
  $("#getinventoriesbutton").css("display", "block")
  $("#create-inventories").css("display", "block")
  $("#update-inventories").css("display", "block")
  $("#delete-inventories").css("display", "block")
  $('.modal-body').html('You now have access to user Inventories')
  $('myModalLabel').html('sign In')
  $('#myModal').modal('show')
  $('#sign-in').css('display', '')
  $('#sign-in').css('display', 'none')

  console.log('signInSuccess ran. Data is :', data)
  //$('#start').css('display', 'block')
  //store.user = data.user
}

const signInFailure = function (error) {
  $('#message').text('Error on sign in')
  $('#message').css('background-color', 'red')
  console.error('signInFailure ran. Error is :', error)
}

const signOutSuccess = function () {
   $('#message').text('Signed out successfully')
   $('#message').css('background-color', 'green')
  console.log('signOutSuccess ran and nothing was returned!')
  // $('#sign-Out').css('display', 'none')
  store.user = null
  $('.modal-body').html('You have sign out of inventorires')
  $('#myModalLabel').html('Sign Out')
  $('#myModal').modal('show')
  $('#sign-out').css('display', '')
  $('#sign-out').css('display', 'none')
}

const signOutFailure = function (error) {
  $('#message').text('Error on sign out')
  $('#message').css('background-color', 'red')
  console.error('signOutFailure ran. Error is :', error)
}


module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
}
