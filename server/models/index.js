var db = require('../db');

module.exports = {
  messages: { // a function which produces all the messages
    get: function ( callback ) {
      var queryString = 'SELECT * FROM messages';
      db.dbConnection.query(queryString, function (err, result) {
        if (err) {
          throw err;
        }
        // send result to controller;
        callback({results: result});
      });
    }, 
    post: function (params, callback) { // a function which can be used to insert a message into the database
      
      // var queryString = "INSERT INTO messages(username, text, roomname) VALUES('ericpark', 'this is a message', 'roomname')";
      
      var queryString = `INSERT INTO messages(username, text, roomname) VALUES("${params[0]}", "${params[1]}", "${params[2]}")`;
      
      db.dbConnection.query(queryString, function(err, result) {
        if(err) {
          throw err;
        }
        callback('Message Added');
      })
    } 
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

