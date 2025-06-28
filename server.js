const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors"); // Added CORS import

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({ origin: "*" })); // Enable CORS for all origins explicitly

// Handle all GET requests
app.get("/:filename", (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(__dirname, `${filename}.txt`);

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      res.status(404).type("text/plain").send("File not found");
    } else {
      res.type("text/plain").send(data);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
