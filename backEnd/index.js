import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { dbConnection } from './src/mongoDB/mongoDB.js';
import { userRoute } from './src/users/userRoute.js';

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;
dbConnection()
app.get('/', (request, response)=> {
    response.send('server is running')
})

app.use('/api/users', userRoute)
app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
});

    