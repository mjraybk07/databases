var db = require('../db');

module.exports = {
  messages: {
    
    // get all messages
    get: function ( callback ) {
      //var queryString = 'SELECT * FROM messages';
      var queryString 'SELECT messages.id, messages.text, messages.roomname FROM messages \
                      LEFT OUTER JOIN users ON (messages.userid = users.id \
                      ORDER BY messages.id desc);';
      
      db.dbConnection.query(queryString, function (err, results) {
        if (err) {
          throw err;
        }
        // send results to controller;
        callback(results);
      });
    },
    
    
    // create a message 
    post: function (params, callback) { 
      
      
      //var queryString = `INSERT INTO messages(username, text, roomname) VALUES("${message.username}", "${message.text}", "${message.roomname}")`;
      
      var queryString = 'INSERT INTO messages(text, userid, roomname) \
                        VALUES(?, (SELECT id FROM users WHERE username = ? limit 1), ?);'
      
      
      db.dbConnection.query(queryString, params, function(err, results) {
        if(err) {
          throw err;
        }
        callback(results);
      })
    } 
  },

  users: {
    get: function (callback) {
      // fetch all users
      var queryString = 'SELECT * from users';
      db.dbconnection.query(queryString, function (err, results) {
        if (err) {
          throw err;
        }
        callback (results);
      });
    },
    post: function (params, callback) {
      //create a user
      var queryString = `INSERT into users(username) VALUES(${params})`;
      db.dbconnection.query(queryString, function (err, results) {
        if (err) {
          throw err;
        }
        callback (results);
      });
    }
  }
};

