import express from 'express';
import {
    approveTestimonial,
    getApprovedTestimonials,
    submitTestimonial
} from '../controllers/testimonialController.js';

const router = express.Router();

// GET: Fetch approved ones for UI
router.get('/approved', getApprovedTestimonials);

// POST: Submit new feedback
router.post('/', submitTestimonial);

// GET: Clicked from Email
router.get('/approve/:id', approveTestimonial);

export default router;