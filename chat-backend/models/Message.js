// Simple schema-like object (not using mongoose for now)
module.exports = function(messageText, sender) {
  return {
    text: messageText,
    sender: sender,
    createdAt: new Date()
  };
};
