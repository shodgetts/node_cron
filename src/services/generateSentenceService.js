const sentences = [
  'Wow, this Chat API is probably the best on the market, isn\'t it?',
  'I heard Stream Chat is really easy to integrate into your app, stoked to try it',
  'Can\'t believe they have UI components in React, React-native, Android, iOS, AND Flutter!',
  'Scaling to 5 million concurrent connections is insane, I cannot even imagine what that took',
  'Cannot wait to replace my home-brewed janky chat with something from Stream',
]

exports.generateSentence = () => {
  return sentences[Math.floor(Math.random() * 4)]
};