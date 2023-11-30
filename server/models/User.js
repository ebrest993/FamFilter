const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must use a valid email address']
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 15
  },

  //HELP>>>>>
  threads: [
    {
      type: Schema.Types.ObjectId,
        ref: 'Thread',
    }
  ]
});

userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {

    // Function to validate password using a reg expression `^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{5,15}$`; where it represents that it needs at least 1 digit, at least 1 lower case letter, at least 1 upper case letter, at least 1 special character, no spaces, and has to be between 5 and 15 characters long
    console.log('Pre Hook: Validate Password');
    const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{5,15}$/;
    const result = regex.test(this.password);

    if (!result) {
      const validationError = this.invalidate(
          'password',
          'Invalid password ...',
          ''
      );
      next(new Error(validationError));
  }

    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.verifyPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('User', userSchema);