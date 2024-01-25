const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController');


router.get('/', async (req, res) => {
    return res.send(await controller.listAll());
});

router.post('/', async (req, res) => {
    return res.send(await controller.create(req.body));
});

router.delete('/:id', async (req, res) => {
    return res.send(await controller.destroy(req.params.id));
});

router.post('/login', async (req, res) => {
    return res.send(await controller.login(req.body));
});

module.exports = router;