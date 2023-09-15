import {obterLivros,Incluir,Excluir} from 'livro-dao.js'
var express=require('express')
router=express.Router
router.get('/', function router (req, res){res.send('livros'obterLivros)})
router.post('/', function router (req, res){req.send('livro'incluir)})

export default router
