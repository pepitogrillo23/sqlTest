const {User} = require('../models');

const UserController = {

    getAll(req,res){
        User.findAll()
        .then(users=>res.send(users))
        .catch(error => {
            console.error(error);
            res.status(500).send({ message: 'There was a problem trying to get users'})
        })
    },

    create(req,res) {
        User.create(req.body)
        .then(user => res.status(201).send(user))
        .catch(error => {
            console.error(error);
            res.status(500).send({ message: 'There was a problem create user'})
        })
    },

    update(req,res) {
        User.update(req.body,{
            where:{
                id: req.params.id
            }
        })
        .then(user => res.send(user))
        .catch(error => {
            console.error(error);
            res.status(500).send({ message: 'There was a problem update user'})
        })
    },

    delete(req,res)  {
        
    }
}

module.exports = UserController;