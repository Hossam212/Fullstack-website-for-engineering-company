const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const viewRouter = require('./routes/viewRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();
app.set('view engine', 'pug');
app.set('views', path.join('views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json({ limit: '10kb' }));
app.use('/', viewRouter);
app.use('/api/v1/users', userRouter);
module.exports = app;
