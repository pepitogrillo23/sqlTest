const express = require('express');
const citasRouter = require('./routes/citas');
const usersRouter = require('./routes/users');
const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/citas', citasRouter);
app.use('/users', usersRouter);

app.listen(PORT, ()=>console.log('server running on port ' + PORT));
