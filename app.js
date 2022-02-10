// const { sequelize } = require('./models');
// sequelize.sync();

const express = require('express');
const authRoute = require('./routes/authRoute');



const app = express();


app.use(express.json());


app.use('/auth', authRoute);


app.use((req, res) => {
    res.status(404).json({ message: 'resource not found on this server' });
});


app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({ message: err.message });
});



app.listen(8003, () => console.log('server running on port 8003'));





