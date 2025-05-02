const express = require('express');
const PORT = 3030
const cors = require('cors');
const db = require('./models/db')

require('dotenv').config()

const router = require('./routes/router');
const todoRouter = require('./routes/todoRouter');
const userRouter = require('./routes/userRouter')
const logger = require('./middlewares/logger');
const { errorHandler, ApiError, routeNotFound } = require('./middlewares/handlers');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger)

app.use(cors({ origin: true, credentials: true }));

db.ping((err) => {
  if (err instanceof Error) {
    console.log(`createConnection error:`, err);
  } else {
		console.log(`Db connected`)
	}
});

app.use('/', router);
app.use('/api/todos', todoRouter)
app.use('/api/user', userRouter)
app.get('/api/testerror', (req, res, next) => {
	try {
		//proses ambil daata dari db
		//data tidak ditemukan
		throw new ApiError(404, 'Data not found')
	} catch (error) {
		next(error)
	}
})

// app.use('*', (req, res) => {
// 	res.status(404).json({
// 		message: 'route not found'
// 	})
// })
app.use(errorHandler)

app.listen(PORT, () => {console.log('Server Running on port:' + PORT)});
