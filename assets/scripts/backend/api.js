const config =require('../config')
const store =require('../store')

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




const showinventories = function () {

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
 const  deleteinventories = function () {
  return $.ajax({
    url: config.apiUrl + '/inventories',
     method: 'DELETE',
     contentType: "application/json; charset=utf-8",
     dataType: "json",
     headers: {
       Authorization: 'Token token=' + store.user.token
     }
   });

 }


module.exports = {
  showinventories,
 deleteinventories
}
