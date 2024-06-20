// app.js
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

//Input route here!
const authRoutes = require('./routes/auth');
const usersRoutes = require('./routes/users');

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

// Gunakan routes auth
// app.use('/api/v1/auth', authRoutes);
app.use('/api/v1', usersRoutes, authRoutes);
// Port untuk server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`http://localhost:${PORT}/`)
});
