const express = require('express');
const app = express();
const port = 3000;

// Parses JSON bodies (as sent by API clients)
app.use(express.json());

// Serves static files from the 'public' directory
app.use(express.static('public'));

// Start the server
app.listen(port, () => {
console.log(`Server running at http://localhost:${port}/`);
});
// This is the function where the call to the API is made. Returns the summarized text as a string.
async function summarizeText(text) {
  app.post('/summarize', async (req, res) => {
    const textToSummarize = req.body.text;
    const summarizedText = await summarizeText(textToSummarize);
    res.send({ summary: summarizedText });
  });
}

// ... (more code)

// Allows for summarizeText() to be called outside of this file
module.exports = summarizeText;