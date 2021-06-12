import express from 'express';

const router = express.Router();

// all routes in here strt from 
router.get('/', (res, req) => {
    res.setEncoding('Hello');
});

export default router;