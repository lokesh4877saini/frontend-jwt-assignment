require('dotenv').config({ path: './src/config/.env'});
const express = require('express');
const cors = require('cors');
const app = express();
app.use(
    cors({
        origin: ["http://localhost:5173"],
    })
);
const connectDB = require('./config/db');
const AuthRoutes = require('./auth/auth.routes');
const userRoutes = require('./user/user.routes');
connectDB();
app.use(express.json());
app.use('/api/auth', AuthRoutes);
app.use('/api/userData', userRoutes);
module.exports = app;