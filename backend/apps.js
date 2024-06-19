const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const registerRoutes = require('./routes/registerRoutes');
const loginRoutes = require('./routes/loginRoutes');
const undanganRoutes = require('./routes/undanganRoutes');


app.use(express.json()); 
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));


// user register & login
app.use('/user', registerRoutes);
app.use('/user', loginRoutes);

// Menggunakan rute undangan
app.use('/undangan', undanganRoutes);









// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

//Port 
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
