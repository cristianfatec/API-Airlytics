const mongoose = require('mongoose');

let isConnected = false; // Flag para verificar se já está conectado

async function connectToDatabase() {
  if (isConnected) {
    console.log('Já conectado ao MongoDB!');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log('Conexão com o MongoDB estabelecida!');
  } catch (error) {
    console.error('Erro ao conectar com o MongoDB:', error);
    throw error;
  }
}

module.exports = connectToDatabase;
