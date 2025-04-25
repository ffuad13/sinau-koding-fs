const express = require('express');
const PORT = 3030
const cors = require('cors');
const db = require('./models/db')


const router = require('./routes/router');
const todoRouter = require('./routes/todoRouter');
const userRouter = require('./routes/userRouter')
const logger = require('./middlewares/logger');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger)

app.use(cors({ origin: true, credentials: true }));
db.ping(()=> {
	console.log('db is connected')
})

app.use('/', router);
app.use('/api/todos', todoRouter)
app.use('/api/user', userRouter)

app.listen(PORT, () => {console.log('Server Running on port:' + PORT)});
