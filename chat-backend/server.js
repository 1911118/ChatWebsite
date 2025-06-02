const express = require("express");
const cors = require("cors");
const { connectToDB } = require("./db"); // correct import
const chatRoutes = require("./routes/chat");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use("/chat", chatRoutes);

// Connect to MongoDB
connectToDB();

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
