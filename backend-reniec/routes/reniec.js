const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/dni/:numero', async (req, res) => {
  const dni = req.params.numero;

  try {
    const response = await axios.get(`https://api.apis.net.pe/v1/dni?numero=${dni}`, {
      headers: {
        Authorization: '',
        'Content-Type': 'application/json'
      }
    });

    res.json(response.data);

  } catch (error) {
    const status = error.response?.status || 500;
    const mensaje = error.response?.data?.message || 'No se pudo obtener los datos del DNI';
    res.status(status).json({
      error: true,
      status,
      message: mensaje
    });
  }
});

module.exports = router;
