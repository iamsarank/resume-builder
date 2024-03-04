import { updateUser, deleteUser, getAllUser, getSingleUser, getUserProfile } from '../Controllers/userController.js'
import express from "express";
import { authenticate } from '../auth/verifyToken.js';

const router = express.Router()

router.get('/:id', authenticate, getSingleUser);
router.get('/', authenticate, getAllUser);
router.put('/:id', authenticate, updateUser);
router.delete('/:id', authenticate, deleteUser);
router.get('/profile/me', authenticate, getUserProfile);

export default router;