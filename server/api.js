// =====================
// Gemini API Server
// =====================
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { GoogleGenerativeAI } = require("@google/generative-ai");

dotenv.config(); // Load environment variables from .env

const app = express();
const PORT = 3001;

// =====================
// Middleware
// =====================
app.use(cors());
app.use(express.json());

// =====================
// Initialize Gemini API
// =====================
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

// Choose the correct model — gemini-1.5-flash is free & fast
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// =====================
// Routes
// =====================
app.post("/api/chat", async (req, res) => {
  try {
    const { prompt } = req.body;
    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    // Call Gemini API
    const result = await model.generateContent(prompt);
    const text = result.response.text();

    res.json({ response: text });
  } catch (error) {
    console.error("❌ Error calling Gemini API:", error);
    res.status(500).json({ error: "Failed to get response from AI assistant" });
  }
});

// =====================
// Start Server
// =====================
app.listen(PORT, () => {
  console.log(`✅ Gemini server is running on http://localhost:${PORT}`);
});
