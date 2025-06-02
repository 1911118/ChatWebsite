const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://abdulrehamanshaik46:jZOkJcXO5FGoBpfv@chat-cluster.odlxzr1.mongodb.net/?retryWrites=true&w=majority&appName=chat-cluster"
    );
    console.log("✅ MongoDB connected successfully.");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error);
    process.exit(1);
  }
};

module.exports = {
  connectToDB,
};
