import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import connectDB from './configs/db.js';
import contactRoutes from './routes/contactRoutes.js';
import testimonialRoutes from './routes/testimonialRoutes.js';

dotenv.config();
connectDB();

const app = express();
app.use(cors({
  origin: ["https://aevrix.netlify.app", "http://localhost:8080","https://aevrix.in"],
  methods: ["GET", "POST"]
}));
app.use(express.json());

// Routes
app.use('/api/testimonials', testimonialRoutes);
app.use('/api/contact', contactRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));