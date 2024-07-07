// src/app.js
import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';
// import connectDB from './config/db.js';
import routes from './routes/index.js';
import logger from './middleware/logger.js';

dotenv.config();

// Resolve __dirname for ES6 modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// enable CORS
app.use(cors());

// Connect Database
// connectDB();

// Middleware
app.use(express.json());
app.use(logger);

// Static folder
app.use(express.static(path.join(__dirname, 'public')));

const buildPath = path.join(__dirname, 'build');

app.use(express.static(buildPath))
app.use(express.json())

// Define Routes
app.use('/api', routes);

// gets the static files from the build folder
app.get('*', (req, res) => {
    res.sendFile(path.join(buildPath, 'index.html'))
  })

export default app;
