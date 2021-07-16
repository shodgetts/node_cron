const StreamChat = require("stream-chat").StreamChat;
const client = new StreamChat(API_KEY, API_SECRET, { allowServerSideConnect: true });

exports.client = client;
