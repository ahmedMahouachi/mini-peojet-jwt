const express = require('express');
const app = express();
require('./models')
const userRoutes = require('./routes/userRoutes')


app.use(express.json());

app.use('/api/auth', userRoutes);

app.get('/', (req, res) => {
    res.send("Salut mec !")
})


app.listen(3001, () => {
    console.log("Le serveur est lancé sur http://localhost:3001");
})