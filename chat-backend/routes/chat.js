const express = require("express");
const router = express.Router();
const Message = require("../models/Message");
const { client } = require("../db");

const dbName = "chat-app";
const collectionName = "messages";

// POST /chat/send
router.post("/send", async (req, res) => {
  const { sender, text } = req.body;
  const message = Message(text, sender);

  try {
    const db = client.db(dbName);
    await db.collection(collectionName).insertOne(message);
    res.status(201).json({ message: "Sent", data: message });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /chat/messages
router.get("/messages", async (req, res) => {
  try {
    const db = client.db(dbName);
    const messages = await db.collection(collectionName).find().toArray();
    res.status(200).json(messages);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
