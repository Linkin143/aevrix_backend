import express from 'express';
import { submitContactForm } from '../controllers/contactController.js';

const router = express.Router();

// POST: http://localhost:5000/api/contact
router.post('/', submitContactForm);

export default router;