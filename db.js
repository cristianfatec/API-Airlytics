
//./db.js
const mongoose = require('mongoose');

let isConnected = false; // Flag para reutilizar a conexão

async function connectToDatabase() {
  if (isConnected) {
    console.log('Conexão já estabelecida.');
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
    console.error('Erro ao conectar ao MongoDB:', error);
    throw error;
  }
}

module.exports = connectToDatabase;
