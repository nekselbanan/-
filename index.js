const express = require('express');
const carRouter = require('./routers/car.routers.js')
const cors = require('cors')
const PORT = 8080;

const app = express();
app.use(cors());
app.use(express.json());
app.use(carRouter);


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));