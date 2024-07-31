import express from 'express';
import bodyParser from 'body-parser';

import toDoRoutes from './routes/todos'

const app=express();

app.use(bodyParser.json());
app.use(toDoRoutes);

app.listen(3000);