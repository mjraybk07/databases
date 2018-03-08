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
    post: function (message, callback) { // a function which can be used to insert a message into the database
      
      var queryString = `INSERT INTO messages(username, text, roomname) VALUES("${message.username}", "${message.text}", "${message.roomname}")`;
      
      db.dbConnection.query(queryString, function(err, result) {
        if(err) {
          throw err;
        }
        callback(`Message added: ${JSON.stringify(message)}`);
      })
    } 
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

