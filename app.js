require('dotenv').config({path: `${process.cwd()}/.env`});
const express = require('express');

const authRouter = require('./route/authRoute');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json(
        {
            status: 'success',
            message: 'Wohooo!'
        }
    );
});

// All routes 

app.use('/api/v1/auth', authRouter);

// Setting the error messages in json for clear error output
app.use('*', (req,res, next) => {
    res.status(404).json({
        status: 'fail',
        message: 'Route not found'
    })
});


const PORT = process.env.PORT || 3000;

app.listen(PORT , () => {
    console.log("Server up and running", PORT);
});