import mongoose from 'mongoose';

const paletteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    palette: [
        {
            color1: {
                type: String,
                required: true,
                unique: true,
            },
            color2: {
                type: String,
                required: true,
                unique: true,
            },
            color3: {
                type: String,
                required: true,
                unique: true,
            },
            color4: {
                type: String,
                required: true,
                unique: true,
            },
            color5: {
                type: String,
                required: true,
                unique: true,
            },
        },
    ],
});

export const Palette = mongoose.model('Palette', paletteSchema);
