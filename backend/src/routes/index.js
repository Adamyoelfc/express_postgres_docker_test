const express = require('express');
const router = express.Router();

// Definir rutas
router.get('/', (req, res) => {
  res.send('API working');
});

router.use('/items', require('./items')); // Ejemplo de subruta

module.exports = router;
