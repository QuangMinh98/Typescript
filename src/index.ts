import express from 'express';
import {App} from "./value";
import database from "./database";
import {File} from "./models/files";

database();
const app: express.Application = express();

const PORT = 3000;

app.get('/', async (req, res) => {
    res.send(await App.say("Hello"));
})

app.get('/files', async (req, res) => {
    const files = await File.find();
    console.log(typeof File)
    res.send(files);
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
