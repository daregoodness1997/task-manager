const express = require('express');
const app = express();
const tasks = require('./routes/tasks');

const PORT = 3000;

// middleware

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Task Manager app');
});

app.use('/api/v1/tasks', tasks);

// app.get('/api/v1/tasks')     - get all the tasks

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
