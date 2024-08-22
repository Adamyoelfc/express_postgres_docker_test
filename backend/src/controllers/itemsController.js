const pool = require('../../config/db');

const getItems = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM items');
    res.json(result.rows);
  } catch (err) {
    res.status(500).send('Error al obtener los items');
  }
};

const addItem = async (req, res) => {
  const { name, description } = req.body;
  try {
    console.log(name, description)
    await pool.query('INSERT INTO items (name, description) VALUES ($1, $2)', [name, description]);
    res.status(201).send('Item agregado');
  } catch (err) {
    res.status(500).send('Error al agregar el item');
  }
};

module.exports = {
  getItems,
  addItem
};
