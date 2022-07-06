// Required dependencies
const express = require('express');
const mongoose = require('mongoose');

//port connection
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// //use files in public folder
// app.use(express.static('public'));

app.use(require('./routes'));

// mongoose database connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/HW_18-social-network', {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Log mongoose queries
mongoose.set('debug', true);

app.listen(PORT, () => console.log(`Connected on localhost:${PORT}`));