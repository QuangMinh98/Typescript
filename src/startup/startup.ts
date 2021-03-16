import express from 'express';
import database from './database';
import routes from './routes';

export = async function (app: express.Application){
    database();
    routes(app);
}