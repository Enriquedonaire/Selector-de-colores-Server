import { Palette } from '../models/Palette-model.js';

export async function createPalette(body, Palette) {
    const newPalette = await Palette.create(body);
    return newPalette;
}

export async function getAllPalettes(Palette) {
    return await Palette.find({});
}

export async function deletePalette(id, Palette) {
    return await Palette.findByIdAndDelete(id);
}
