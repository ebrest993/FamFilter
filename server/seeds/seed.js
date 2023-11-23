const db = require('../config/connection');
const { User, Thread, Message } = require('../models');
const cleanDB = require('./cleanDB');

const userData = require('./userData.json');
const threadData = require('./threadData.json');
const messageData = require('./messageData.json');

db.once('open', async () => {
  // clean database
  await cleanDB("User", "users");
  await cleanDB("Thread", "threads");
  await cleanDB("Message", "messages");

  // bulk create each model
  const users = await User.insertMany(userData);
  
  const threadList = [];
  for (let i = 0; i < 4; i++) {
    let thread = {
      title: threadData[i].title,
      createdBy:users[i]._id
    }
    threadList.push(thread); 
  }
  const threads = await Thread.insertMany(threadList);

  

  const messageList = [];
  for (let i = 0; i < 4; i++) {
    let message = {
      message: messageData[i].message,
      user:users[i]._id
    }
    messageList.push(message); 
  }
   
  const messages = await Message.insertMany(messageList);

 

  console.log('all done!');
  process.exit(0);
});
