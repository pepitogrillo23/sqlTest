const {Cita} = require('../models');

const CitaController = {

    getAll(req,res){
        Cita.findAll()
        .then(citas=>res.send(citas))
        .catch(error => {
            console.error(error);
            res.status(500).send({ message: 'There was a problem trying to get citas'})
        })
    },

    create(req,res) {
        Cita.create(req.body)
        .then(cita => res.status(201).send(cita))
        .catch(error => {
            console.error(error);
            res.status(500).send({ message: 'There was a problem create cita'})
        })
    }
}

module.exports = CitaController;
