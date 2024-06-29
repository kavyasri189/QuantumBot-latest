const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

const db = admin.firestore();

exports.addMessage = functions.https.onRequest(async (req, res) => {
  // Get chat session ID and message data from the request
  const {sessionId, senderId, text} = req.body;

  if (!sessionId || !senderId || !text) {
    return res.status(400).send("Missing parameters");
  }

  try {
    // Add a new message to the messages sub-collection
    const messageRef = db.collection("chatSessions").doc(sessionId)
        .collection("messages")
        .doc();
    await messageRef.set({
      senderId,
      text,
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    });

    res.status(200).send("Message added successfully");
  } catch (error) {
    console.error("Error adding message:", error);
    res.status(500).send("Internal Server Error");
  }
});
