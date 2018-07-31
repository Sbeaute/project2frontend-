const config = require('../config')
const store = require('../store')

/**
 * Show the user's projects.
 *
 */
// const  = function () {
//   return $.ajax({
//     url: config.apiUrl + '/',
//     method: 'POST',
//     data
//     // data: data
//   })
// }




const showinventories = function(id) {

  return $.ajax({
    url: config.apiUrl + '/inventories',
    method: 'GET',
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  });

}
const deleteinventories = function(id) {
  return $.ajax({
    url: config.apiUrl + `/inventories/${id}`,
    method: 'DELETE',
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  });

}
const updateinventories = function(invId, invBrand, invModel, invImg) {
  return $.ajax({
    url: config.apiUrl + `/inventories/${invId}`,
    method: 'PATCH',
    data: {
      'inventory': {
        'brand': invBrand,
        'model': invModel,
        'imgurl': invImg
      }
    }
  })
}
const createinventories = function(data) {
  return $.ajax({
    url: config.apiUrl + `/inventories/`,
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
    // :{
    //   'inventory':{
    //     'brand':invBrand,
    //     'model': invModel,
    //     'imgurl': invImg
    //   }


  })

}

module.exports = {
  showinventories,
  deleteinventories,
  updateinventories,
  createinventories
}
