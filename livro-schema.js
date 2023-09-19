const mongoose = require('./conexao'); 


const LivroSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
  },
  autor: String,
  anoPublicacao: Number,

});


const Livro = mongoose.model('livros', LivroSchema);

module.exports = Livro; 
