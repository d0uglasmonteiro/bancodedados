const express = require('express');
const router = express.Router();
const LivroDAO = require('../modelo/livro-dao'); 


router.get('/', async (req, res, next) => {
  try {
    const livros = await LivroDAO.obterLivros();
    res.json(livros);
  } catch (error) {
    next(error);
  }
});


router.post('/', async (req, res, next) => {
  const novoLivro = req.body; // Os dados do novo livro devem ser enviados no corpo da requisição
  try {
    const livroInserido = await LivroDAO.incluir(novoLivro);
    res.status(201).json({ message: 'Livro adicionado com sucesso', livro: livroInserido });
  } catch (error) {
    next(error);
  }
});


router.delete('/:id', async (req, res, next) => {
  const codigoLivro = req.params.id;
  try {
    const resultado = await LivroDAO.excluir(codigoLivro);
    if (resultado.deletedCount === 1) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Livro não encontrado' });
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
