const express = require('express');
const PORT = 3030
const cors = require('cors');


const router = require('./routes/router');
const todoRouter = require('./routes/todoRouter');
const logger = require('./middlewares/logger');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger)

app.use(cors({ origin: true, credentials: true }));

app.use('/', router);
app.use('/api/todos', todoRouter)

app.listen(PORT, () => {console.log('Server Running on port:' + PORT)});
