const { User, Thread, Message } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      if (!context.user) {
        throw AuthenticationError;
      }

      return await User.findById(context.user._id);
    },
    users: async (parent, args, context) => {
      if (!context.user) {
        throw AuthenticationError;
      }
      return await User.find({});
    },
    threads: async (parent, args, context) => {
      if (!context.user) {
        throw AuthenticationError;
      }
      return await Thread.find({}).populate('createdBy').populate('members').populate('messages');
    },
    messages: async (parent, args, context) => {
      if (!context.user) {
        throw AuthenticationError;
      }
      return await Message.find({}).populate('user').populate('thread');
    }
  },
  Mutation: {
    signin: async (parent, args) => {
      try {
        const user = await User.create(args);
        const token = signToken(user);
        return { token };
      } catch (err) {
        console.error(err);
        return null;
      }
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        console.log('user not found');
        throw AuthenticationError;
      }

      const correctPw = await user.verifyPassword(password);

      if (!correctPw) {
        console.log('incorrect password');
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token };
    },
    addThread: async (parent, { title, members, message }, context) => {
      const newMessage = await Message.create({ user: context.user._id, message });
      const messages = [newMessage._id];
      return await Thread.create({ title, createdBy: context.user._id, members, messages }); 
    },
    //create message then update thread by using $push to push new message id onto the thread 
    
  }
};

module.exports = resolvers;
