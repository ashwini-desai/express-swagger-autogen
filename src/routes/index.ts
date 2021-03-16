import { Router } from 'express';
import healthCheck from './healthCheck';
import v1 from './v1';
import v2 from './v2';

const router = Router();

router.get('/healthCheck', healthCheck);

router.use('/v1/users', v1);
router.use('/v2/users', v2);

export default router;
