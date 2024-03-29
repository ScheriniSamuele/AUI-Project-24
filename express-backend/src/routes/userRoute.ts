import express, { Express } from 'express';

import { getUsername, getHomeAssistantKey, updateProfile, getHomeAssistantUrl } from '../controllers/userController';

const router = express.Router();

router.get('/getUsername', getUsername);
router.get('/getHomeAssistantKey', getHomeAssistantKey);
router.get('/getHomeAssistantUrl', getHomeAssistantUrl);
router.put('/updateProfile/:profile_id', updateProfile);

export default router;
