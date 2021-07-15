require("dotenv").config();
const express = require("express");
const cors = require("cors");

const axios = require("axios");
const app = express();
const port = process.env.PORT 

const base64 = require("js-base64").Base64;
const fetch = require("node-fetch");

//chat client
const StreamChat = require("stream-chat").StreamChat;
const chatClient = StreamChat.getInstance('qtc55pny5xww', '9hrptm6edfg8ygm6hzswpj8rnze94v8ujfmg7drfk8ndaztnqkh875upke6ndypc');

// node cron
const cron = require('node-cron')

//middleware
app.use(cors());


cron.schedule('* * * * *', () => {
  console.log('running every minute');
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});

