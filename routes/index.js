module.exports = (app) => {
    const express = require('express');
    // para separar las rutas a traves de un modulo de express
    // const router = express.Router();

    let entries = []
    // Variables globales de express, almacenamiento del servidor
    app.locals.entries = entries;

    app.get('/', (req, res) => {
        res.render('index', {
            title: 'Home'
        });
    });

    app.get('/new-entry', (req, res) => {
        res.render('new-entry', {
            title: 'New entry'
        });
    });

    app.post('/new-entry', (req, res) => {
        if (!req.body.title || !req.body.body) {
            res.status(400).send('Entradas deben tener titulo y un cuerpo');
        }
        let newEntry = {
            title: req.body.title,
            content: req.body.body,
            published: new Date()
        }
        entries.push(newEntry);

        res.redirect('/');
    });
}

// luego exportarlo
// module.exports = router;
