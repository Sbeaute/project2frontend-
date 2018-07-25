const config =require('../config')
const store =require('../store')

/**
 * Show the user's projects.
 *
 */
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

module.exports = {
  showinventories
}
