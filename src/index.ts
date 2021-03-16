import express from 'express';
import {App} from "./value";
import startup from "./startup/startup";
import {File} from "./models/files";
const app: express.Application = express();
startup(app);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
