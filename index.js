const express = require('express');
const multer = require('multer');

const port = process.env.PORT || 8080;

const upload = multer();
const app = express();

app.use(express.static(__dirname + '/public'));

app.post('/get-file-size', upload.single('file'), (req, res) => {
  res.json({size: req.file.size});
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
