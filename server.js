const express = require('express');
const path = require('path');
const port = process.env.PORT || 8000;
const app = express();

// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log("running on port 8000")
});