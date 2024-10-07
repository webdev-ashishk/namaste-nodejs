const express = require('express');
const app = express();
const port = 3000;
const connectDB = require('./db/connect');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const pass = require('path');

// Configuration
cloudinary.config({
  cloud_name: 'dtm9kofcj',
  api_key: '669678545965194',
  api_secret: 'uEnuzML2_w2G6UD2cVtRUiJMxoI', // Click 'View API Keys' above to copy your API secret
});
const upload = multer({ dest: 'upload/' });

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Namste NODEJS...' });
});
// multer as middleware
app.post('/uploadImage', upload.single('avatar'), async (req, res) => {
  try {
    const file = req.file.path;
    const cloudinaryResponse = await cloudinary.uploader.upload(file, {
      folder: 'AshishK',
    });
    if (!cloudinaryResponse) {
      throw new Error('cloudinary response not found ...');
    }
    res.status(200).send('uploaded successfuly...', cloudinaryResponse);
  } catch (error) {
    res.status(400).send(`you are inside catch block ${error.message}`);
  }

  // console.log('uploaded file successfully...', uploadFile);
});
// connection to db and server
(async () => {
  try {
    await connectDB();
    console.log('db is connected successfully...');
    app.listen(port, () => {
      console.log(`server is running on port ${port}`);
    });
  } catch (error) {
    console.log('URL is not currect ! ' + error.message);
  }
})();
