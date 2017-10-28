const express = require('express');
const getDb = require('../database/bootstrap.database');
const dashboardRouter = express.Router();

dashboardRouter.get('/get_all_properties', (req, res) => {
    const dbInstance = getDb();
    dbInstance.get_all_properties()
        .then(properties => res.status(200).send(properties))
        .catch(err => res.send(err));
});

dashboardRouter.get('/filter_properties/:filter', (req, res) => {
    const dbInstance = getDb();
    dbInstance.filter_properties(req.params.filter)
        .then(properties => res.status(200).send(properties))
        .catch(err => res.send(err));
});

dashboardRouter.delete('/delete_property/:id', (req, res) => {
    const dbInstance = getDb();
    dbInstance.delete_property([req.params.id])
        .then(r => res.status(200).send())
        .catch(err => res.send(err));
});

module.exports = dashboardRouter;
