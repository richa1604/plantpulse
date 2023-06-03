const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const EmployeeRoute = require('./routes/employees')
const AuthRoute = require('./routes/auth')
mongoose.connect('mongodb://0.0.0.0:27017/testdb', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection
const app = express();
db.on('error', (err) => {
  console.log(err)
})
db.once('open', () => {
  console.log('DB CONNECTION EST');
})

// User authentication route
app.use(morgan('chai'));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
const PORT = process.env.PORT || 3190;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
app.use('/api/Employee', EmployeeRoute)
app.use('/api/auth', AuthRoute)
/*
app.post('/home', (req, res) => {
    // Handle user authentication logic here
  });
  
  // Payment processing route
app.post('/about', (req, res) => {
    // Handle payment processing logic here
  });
  
  // Tree planting route
app.post('/plant', (req, res) => {
    // Handle tree planting logic here
  });
app.post('/explore', (req, res) => {
    // Handle tree planting logic here
  });
*/