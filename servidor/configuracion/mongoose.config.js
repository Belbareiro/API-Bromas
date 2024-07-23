const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/chistes');
        console.log('Conectado a MongoDB');
    } catch (error) {
        console.error('Error al conectar a MongoDB:', error);
        process.exit(1); // Termina el proceso si hay un error
    }
};

module.exports = connectDB;