const mongoose = require('mongoose');


const { Schema } = mongoose;

const threadSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
  },
  members: [
    {
        type: Schema.Types.ObjectId,
        ref: 'User',
    }
  ],
  messages: [
    {
        type: Schema.Types.ObjectId,
        ref: 'Message',
    }
  ],
 
});



//HELP>>>>>
// threadSchema.virtual('creator').get(function () {
//   return this.createdBy.ObjectId;
// });



module.exports = mongoose.model('Thread', threadSchema);