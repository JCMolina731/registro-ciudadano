const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const reniecRoutes = require('./routes/reniec');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/reniec', reniecRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});