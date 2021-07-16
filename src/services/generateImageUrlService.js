const fs = require("fs");
const { client } = require('./generateStreamChatClient')

// image paths
const images = [
  '../assets/userImages/photo-1463453091185-61582044d556.jpeg',
  '../assets/userImages/photo-1503467913725-8484b65b0715.jpeg',
  '../assets/userImages/photo-1519345182560-3f2917c472ef.jpeg',
  '../assets/userImages/photo-1506089676908-3592f7389d4d.jpeg',
  '../assets/userImages/photo-1507003211169-0a1dd7228f2d.jpeg',
  '../assets/userImages/photo-1531251445707-1f000e1e87d0.jpeg',
  '../assets/userImages/photo-1541271696563-3be2f555fc4e.jpeg',
  '../assets/userImages/photo-1542345812-d98b5cd6cf98.jpeg',
  '../assets/userImages/photo-1546539782-6fc531453083.jpeg',
  '../assets/userImages/photo-1546623381-d6d69cd69955.jpeg',
  '../assets/userImages/photo-1546820389-44d77e1f3b31.jpeg',
  '../assets/userImages/photo-1548946526-f69e2424cf45.jpeg',
  '../assets/userImages/photo-1549351236-caca0f174515.jpeg',
  '../assets/userImages/photo-1551069613-1904dbdcda11.jpeg',
  '../assets/userImages/photo-1554384645-13eab165c24b.jpeg',
  '../assets/userImages/photo-1569443693539-175ea9f007e8.jpeg',
  '../assets/userImages/photo-1573140247632-f8fd74997d5c.jpeg',
  '../assets/userImages/photo-1546456073-6712f79251bb.jpeg',
  '../assets/userImages/photo-1502378735452-bc7d86632805.jpeg',
  '../assets/userImages/photo-1546967191-fdfb13ed6b1e.jpeg',
  '../assets/userImages/photo-15029374069',
  '../assets/userImages/photo-1552058544-f2b08422138a.jpeg'
]

exports.profileImage = async function () {
  const channel = client.channel(process.env.CHANNEL_TYPE, process.env.CHANNEL_ID)

  const index = Math.floor(Math.random() * 21);
  imagePath = images[index];

  const url = await channel.sendImage(
    fs.createReadStream(imagePath),
    "profile_image.JPG", null
    , { id: 'katie' });
  return url.file
}