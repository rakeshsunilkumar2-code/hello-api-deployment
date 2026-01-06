const express = require("express");

const app = express();

// Route
app.get("/sayHello", (req, res) => {
  res.json({ message: "Hello User." });
});

// IMPORTANT: listen on PORT
const PORT = process.env.PORT || 80;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
