var db = require('../db');

module.exports = {
  messages: {
    
    // get all messages
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
    
    
    // create a message 
    post: function (message, callback) { 
      
      
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
    get: function (callback) {
      // fetch all users
      var queryString = 'SELECT * from users';
      db.dbconnection.query(queryString, function (err, result) {
        if (err) {
          throw err;
        }
        callback (result);
      });
    },
    post: function (params, callback) {
      //create a user
      var queryString = `INSERT into users(username) VALUES(${params})`;
      db.dbconnection.query(queryString, function (err, result) {
        if (err) {
          throw err;
        }
        callback (result);
      });
    }
  }
};

