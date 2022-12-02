import * as crud from '../services/crud.js';
import { Palette } from '../models/Palette-model.js';
import { createError } from '../services/error.js';

export const createPalette = (req, res, next) => {
    crud.createPalette(req.body, Palette)
        .then((resp) => {
            if (resp === null) {
                res.status(406);
            }
            res.json(resp);
        })
        .catch((err) => next(createError(err)));
};

export const getAllPalettes = async (req, res, next) => {
    try {
        const resp = await crud.getAllPalettes(Palette);
        res.json(resp);
    } catch (err) {
        next(createError(err));
    }
};

export const deletePalette = (req, res, next) => {
    crud.deletePalette(req.params.id, Palette)
        .then((resp) => {
            if (resp) {
                res.status(202);
                res.json(resp);
            } else {
                res.status(204);
                res.json({ message: `This palette doesn't exist` });
            }
        })
        .catch((err) => {
            next(createError(err));
        });
};
