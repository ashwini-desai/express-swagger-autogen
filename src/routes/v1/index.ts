import { Router } from 'express';

const router = Router();

router.get('/:username', (req, res) => {
    // #swagger.operationId = 'getUser'
    // #swagger.tags = ['users']
    // #swagger.description = 'Endpoint to fetch user by username'

    switch (req.params.username) {
        case 'alice':
            res.status(200).json({ username: `User with name ${req.params.username} found`, status: 'success' });
            break;
        default:
            res.status(404).json({ message: `User with name ${req.params.username} not found`, status: 'error' });
            break;
    }
});

export default router;
