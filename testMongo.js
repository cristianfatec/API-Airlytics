const mongoose = require('mongoose');
require('dotenv').config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Conexão com o MongoDB estabelecida!');
    mongoose.disconnect();
  })
  .catch((error) => {
    console.error('Erro ao conectar ao MongoDB:', error.message);
  });
