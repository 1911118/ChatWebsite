const mongoose = require('mongoose');

const connectToDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://abdulrehamanshaik46:<your-password>@chat-cluster.odlxzrl.mongodb.net/chatApp?retryWrites=true&w=majority&appName=chat-cluster", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB connected successfully.");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error);
    process.exit(1);
  }
};

// Optional: If you really need `client`, you can expose mongoose.connection
module.exports = {
  connectToDB,
  client: mongoose.connection,
};
