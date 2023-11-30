const { User, Thread, Message } = require('../models');
const { findOneAndUpdate } = require('../models/User');
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
        return err;
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
    //creating a new thread
    addThread: async (parent, { title, members, message }, context) => {
      const newMessage = await Message.create({ user: context.user._id, message });
      const messages = [newMessage._id];
      const newThread = await Thread.create({ title, createdBy: context.user._id }); 
      newThread.messages = messages;
      newThread.members = [...members, context.user._id];
      newThread.save();
      return newThread;
    },
    //creating a new message
    addMessage: async (parent, { threadId, messageText }, context) => {
      const newMessage = await Message.create({ user: context.user._id, message: messageText });
      const updatedThread = await Thread.findOneAndUpdate(
        { _id: threadId },
        { $push: { messages: newMessage._id  } },
        { new: true }
      );
      return updatedThread;
    },

    //deleting a message
    deleteMessage: async (parent, { threadId, messageId }) => {
      const deletedMessage = await Thread.findOneAndUpdate(
        { _id: threadId },
        { $pull: { messages: messageId } },
        { new: true }
        );
        return deletedMessage; 
    }
    
  }
};

module.exports = resolvers;
