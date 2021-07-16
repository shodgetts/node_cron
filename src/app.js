require("dotenv").config({ path: '../.env' });
const express = require("express");
const cors = require("cors");
const fs = require("fs");

// express server
const app = express();
const port = process.env.PORT

//middleware
app.use(cors());

// node cron
const cron = require('node-cron')


// for heroku 
app.get('/', (req, res) => {
  console.log('running?')
})

const { profileImage } = require("./services/generateImageUrlService");
const { client } = require('./services/generateStreamChatClient');
const { getUsername } = require('./services/generateUsername');
const { generateSentence } = require('./services/generateSentenceService');

const sendMessage = async () => {
  // user
  const user_id = getUsername()
  const token = client.createToken(user_id)

  // channel
  const channel = client.channel(process.env.CHANNEL_TYPE, process.env.CHANNEL_ID)

  // connect
  await client.connectUser({ id: user_id, image: await profileImage() }, token)

  // send message
  const res = await channel.sendMessage({ text: generateSentence(), user_id })

  // disconnect user
  await client.disconnectUser()
}

cron.schedule('*/5 * * * * *', () => {
  sendMessage();
  console.log('running every 5 seconds');
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});