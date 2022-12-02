import express from 'express';
const router = express.Router();

import {
    createPalette,
    deletePalette,
    getAllPalettes,
} from '../controllers/palette-controller.js';

router.get('/', getAllPalettes);
router.post('/', createPalette);
router.delete('/:id', deletePalette);

export default router;
