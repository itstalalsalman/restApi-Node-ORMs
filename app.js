const express = require('express')

const app = express();

app.get('/', (req, res) => {
    res.status(200).json(
        {
            status: 'success',
            message: 'Wohooo!'
        }
    )
})


app.listen(3000, () => {
    console.log("Server up and running");
})