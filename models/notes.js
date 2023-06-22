const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 6;

const userSchema = new Schema({
    name: {type: String, required: true},
    user: {type: ObjectId, required: true}
  }, {
        timestamps: true,
  }
)