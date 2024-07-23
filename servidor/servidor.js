const express = require('express');
const connectDB = require('./configuracion/mongoose.config');
const jokesRoutes = require('./rutas/jokes.routes');

const app = express();
const port = 3000;


connectDB();

app.use(express.json());


app.use('/api/chistes', jokesRoutes);


app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});
