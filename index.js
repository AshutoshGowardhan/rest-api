import express from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './routes/users.js';
const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use('/users', usersRoutes)

app.get('/', (req, res) => {
    res.send('Hello from Homepage')
})

app.listen(5000, () => {
    console.log('server listening')
})