// app.js

const express = require('express');
const authRoutes = require('./routes/auth');
const app = express();

app.use(express.json());

// Gunakan routes auth
app.use('/auth', authRoutes);
// Port untuk server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
