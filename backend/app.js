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
});
