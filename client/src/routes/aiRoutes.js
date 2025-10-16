import express from "express";
import axios from "axios";

const router = express.Router();

// Replace this with your EC2 IP
const OLLAMA_API_URL = "http://13.233.247.148:11434/api/generate";

router.post("/chat", async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    const response = await axios.post(
      OLLAMA_API_URL,
      { model: /*"llama3:8b"*/ "phi3:mini", prompt },
      { responseType: "stream" }
    );

    let result = "";

    response.data.on("data", (chunk) => {
      try {
        const json = JSON.parse(chunk.toString());
        if (json.response) result += json.response;
      } catch (e) {}
    });

    response.data.on("end", () => {
      res.json({ reply: result });
    });

  } catch (error) {
    console.error("AI Error:", error.message);
    res.status(500).json({ error: "Error communicating with Ollama API" });
  }
});

export default router;
