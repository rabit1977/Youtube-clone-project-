import express from 'express';
import {
  deleteUser,
  dislike,
  getUser,
  like,
  subscribe,
  unsubscribe,
  update,
} from '../controllers/user.js';
import { verifyToken } from '../verifyToken.js';

const router = express.Router();

//update a user
router.put('/:id',verifyToken, update);

//deleter users
router.delete('/:id',verifyToken, deleteUser);
//get users
router.get('/find/:id', getUser);
//subscribe a users
router.post('/sub/:id',verifyToken, subscribe);
//unsubscribe a users
router.post('/unsub/:id',verifyToken, unsubscribe);
//like a video
router.post('/like/:vieoId',verifyToken, like);
// dislike a video
router.post('/dislike/:videoId',verifyToken, dislike);

export default router;
