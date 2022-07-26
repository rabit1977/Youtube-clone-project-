import express from 'express';
import {
  addVideo,
  updateVideo,
  deleteVideo,
  getVideo,
  trend,
  random,
  sub,
} from '../controllers/video.js';
import { verifyToken } from '../verifyToken.js';

const router = express.Router();

// create video controller
router.post('/', verifyToken, addVideo);
router.put('/:id', verifyToken, updateVideo);
router.delete('/:id', verifyToken, deleteVideo);
router.get('/find/:id', getVideo);
router.put('/view/:id', addVideo);
router.get('/trend', trend);
router.get('/random', random);
router.get('/sub', verifyToken, sub);

export default router;
