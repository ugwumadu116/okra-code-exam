import express from 'express';
import account from './account';

const router = express.Router();

// Routes
router.use('/account', account);

export default router;
