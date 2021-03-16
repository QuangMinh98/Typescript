import express from 'express';
import test from '../routes/test';
import file from '../routes/files';

export = function(app: express.Application){
    app.use(express.json());

    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-auth-token");
        res.header("Access-Control-Expose-Headers", "x-auth-token");
        next();
    });

    app.use('/hello',test);
    app.use('/files',file);
}