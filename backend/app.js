HEAD:backend/apps.js
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
=======
// app.js
const express = require('express');
const authRoutes = require('./routes/auth');
const usersRoutes = require('./routes/users');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

// Gunakan routes auth
app.use('/auth', authRoutes);
app.use('/api/v1', usersRoutes);
// Port untuk server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`http://localhost:${PORT}/`);
});
