import * as dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';
import { Palette } from '../models/Palette-model.js';

export async function mongoConnect() {
    const user = process.env.USER;
    const password = process.env.PASS;
    let NAME_DB;
    if (process.env.NODE_ENV === 'test') {
        NAME_DB = process.env.TESTNAME_DB;
    } else {
        NAME_DB = process.env.NAME_DB;
    }
    console.log('Connecting to', NAME_DB);
    const uri = `mongodb+srv://${user}:${password}@oxygencluster.4ayq4rg.mongodb.net/?retryWrites=true&w=majority`;
    const mongooseConnect = await mongoose.connect(uri);
    return mongooseConnect;
}
export async function mongoDisconnect() {
    return mongoose.disconnect();
}

export async function installData(data) {
    const deleted = await Palette.deleteMany({});
    const result = await Palette.insertMany(data);
    return { result, deleted };
}
