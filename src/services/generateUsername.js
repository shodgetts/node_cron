const { uniqueNamesGenerator, adjectives, colors, animals } = require('unique-names-generator');


exports.getUsername = () => {
  return uniqueNamesGenerator({
    dictionaries: [adjectives, animals, colors],
    length: 2
  });
};
