
const db = require("../config/dbconnection"); 

const User = db.model(
  "User",
  new db.Schema({
    username: String,
    email: String,
    password: String,
    roles: [
      {
        type: db.Schema.Types.ObjectId,
        ref: "Role"
      }
    ]
  })
);

module.exports = User;