import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import * as dotenv from 'dotenv';
import { mongoConnect } from './src/services/db.js';
import paletteRouter from './src/routes/palette-router.js';

dotenv.config();
export const app = express();
const port = process.env.PORT;

mongoConnect();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.use('/palettes', paletteRouter);

app.use((err, req, resp, next) => {
    resp.status(err.status);
    resp.json({ error: err.message });
});

export const server = app.listen(port, () => {
    console.log(`Server listening in http://localhost:${port}`);
});
