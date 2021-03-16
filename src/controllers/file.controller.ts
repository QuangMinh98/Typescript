import { Request, Response, NextFunction } from 'express';
import {File} from "../models/files";

export class FileController{
    
    static async getAllFiles(req: Request, res: Response, next: NextFunction){
        const files = await File.find();
        res.send(files);
    }
}