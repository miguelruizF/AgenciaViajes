import express from 'express';

const router = express();

router.get('/', (req, res) => {
    res.send('Inicio')
})
router.get('/contacto', (req, res) => {
    res.send('Contacto')
})
router.get('/sobre-Nosotros', (req, res) => {
    res.send('Sobre Nosotros')
})

export default router;