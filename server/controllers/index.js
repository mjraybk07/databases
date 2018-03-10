var models = require('../models')
var bluebird = require('bluebird'); 

var userFields = ['username'];
var messageFields = ['message', 'username', 'roomname'];

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get ( function(err, results) {
        // TODO handle error
        res.json(results);
      })
    },
    
    post: function (req, res) {
      var params = [ req.body[text], req.body[username], req.body[roomname] ];
      console.log('😀  MESSAGES REQUEST:', req.body);
      
      models.messages.post ( params, function(err, results) {
        // TODO handle error
        res.json(results);
      });      
    }
  },
  
  users: {
    get: function (req, res) {
      model.users.get( function (err, results) {
        // TODO handle error
        res.json(results);
      });
      
    },
    
    post: function (req, res) {
      var params = [ req.body[username] ];
      
      models.users.post ( params, function(err, results) {
        // TODO handle error
        res.json(results);
      });      
    }
  }
  
}



// module.exports = {
//   messages: {
//     get: function (req, res) { 
//       models.messages.get( function (data) {
//         //todo 'send' status code
//         res.send(data);
//       });
//     }, // a function which handles a get request for all messages
    
    
//     post: function (req, res) {
//       var username = req.body.username;
//       var text = req.body.text;
//       var roomname = req.body.roomname;
//       var params = [username, text, roomname];
      
//       var message = req.body;
//       console.log('😀  REQUEST:', req.body);
      
//       // todo add 'send' status code
      
//       models.messages.post(message, function(data) {
//         res.send(data);
//       })
      
//       //console.log("controller post messages")
//     } // a function which handles posting a message to the database
//   },

//   users: {
//     // Ditto as above
//     get: function (req, res) {
//       models.users.get( function (data) {
//         //todo 'send' status code
//         res.send(data);
//       });
//     },
//     post: function (req, res) {}
//   }
// };
