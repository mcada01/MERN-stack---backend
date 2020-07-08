const { Router } = require('express');
const router = Router();

const { getUsers, createUser, getUser, updatedUser, deleteUser } = require('../controllers/users.controller');

router.route('/')
    //.get((req,res) => res.send('User Routes')) //enviar un texto
    .get(getUsers) //enviar un json
    .post(createUser);
    //.put()//actualiza toda la nota
    //.patch() //actualiza solo una propiedad de una nota

    //http://localhost:4000/api/users/1
router.route('/:id')
    .get(getUser)
    .put(updatedUser)
    .delete(deleteUser);

module.exports = router;