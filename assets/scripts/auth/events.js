'use strict'

const getFormFields = require("../../../lib/get-form-fields")
const store = require('../store')


const api = require('./api')
const ui = require('./ui')



const onSignUp = function (event) {
  event.preventDefault()
  console.log('sign up ran!')

  const data = getFormFields(this)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()

  //console.log('sign in ran!')

  const data = getFormFields(this)
  api.signIn(data)
    .then((result) => {
      ui.signInSuccess()
      console.log(result)
      store.user = result.user
    })
    .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  console.log('sign out ran')
  api.signOut()
    .then(() => {
      console.log("it works")
      ui.signOutSuccess()
      store.user = null
      console.log(store.user)
    })
    .catch(ui.signOutFailure)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
}
  module.exports = {
  addHandlers
}
