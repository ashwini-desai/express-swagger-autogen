import { Router } from 'express';

const router = Router();

router.get('/:username', (req, res) => {
    res.status(200).json({ username: `User with name ${req.params.username} found`, status: 'success' });
});

export default router;
