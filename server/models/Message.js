const mongoose = require('mongoose');


const { Schema } = mongoose;

const messageSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  message: {
    type: String,
    required: true,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now(), 
  },
  thread: {
    type: Schema.Types.ObjectId,
    ref: 'Thread',
  }
});



module.exports = mongoose.model('Message', messageSchema);