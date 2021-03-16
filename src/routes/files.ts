import express from 'express';
import {FileController} from '../controllers/file.controller'
const router = express.Router();

router.get('/',FileController.getAllFiles);

export = router;