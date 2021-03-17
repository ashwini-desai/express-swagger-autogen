import { Router } from 'express';

const router = Router();

router.get('/:username', (req, res) => {
    // #swagger.operationId = 'getUser'
    // #swagger.tags = ['users']
    // #swagger.description = 'Endpoint to fetch user by username'

    res.status(200).json({ username: `User with name ${req.params.username} found`, status: 'success' });
});

export default router;
