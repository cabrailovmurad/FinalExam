import { createData, deleteData, getAllData, getDataById } from "../controller/elementController.js";
import express from 'express';
export const exampleRouter = express.Router();
exampleRouter.get('/',getAllData )

exampleRouter.get('/:id',getDataById );


exampleRouter.post('/',createData);


exampleRouter.delete('/:id',deleteData);
