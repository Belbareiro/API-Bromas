const Joke = require('../modelos/jokes.model');

// Obtener todos los chistes
const obtenerChistes = async (req, res) => {
    try {
        const chistes = await Joke.find();
        res.json(chistes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtener un chiste
const obtenerChiste = async (req, res) => {
    try {
        const chiste = await Joke.findById(req.params.id);
        if (!chiste) return res.status(404).json({ message: 'Chiste no encontrado' });
        res.json(chiste);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Crear un chiste
const crearChiste = async (req, res) => {
    const chiste = new Joke({
        content: req.body.content,
        author: req.body.author,
    });

    try {
        const nuevoChiste = await chiste.save();
        res.status(201).json(nuevoChiste);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Actualizar un chiste
const actualizarChiste = async (req, res) => {
    try {
        const chiste = await Joke.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!chiste) return res.status(404).json({ message: 'Chiste no encontrado' });
        res.json(chiste);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Eliminar un chiste
const eliminarChiste = async (req, res) => {
    try {
        const chiste = await Joke.findByIdAndDelete(req.params.id);
        if (!chiste) return res.status(404).json({ message: 'Chiste no encontrado' });
        res.json({ message: 'Chiste eliminado' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    obtenerChistes,
    obtenerChiste,
    crearChiste,
    actualizarChiste,
    eliminarChiste,
};