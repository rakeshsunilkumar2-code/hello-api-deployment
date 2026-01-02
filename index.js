const express = require('express');
const app = express();

// /sayHello route
app.get('/sayHello', (req, res) => {
  res.json({ message: "Hello User." });
});

// Listen on port 80
const PORT = 80;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

