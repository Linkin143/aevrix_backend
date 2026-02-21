import express from 'express';
import { approveTestimonial, submitTestimonial } from '../controllers/testimonialController.js';

const router = express.Router();

// POST: http://localhost:5000/api/testimonials
router.post('/', submitTestimonial);

// GET: This is the route the founder clicks in the email
router.get('/approve/:id', approveTestimonial);

export default router;