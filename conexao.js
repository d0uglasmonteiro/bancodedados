const { default: mongoose } = require("mongoose");

const options={useUnifiedTopology=true,useNewUrlParser=true};

const mongoURL='mongodb://localhost:27017'

mongoose.connect(mongoURL, options)
.then(()=>console.log('conexao com o mongoDB estabelecida.'))
.catch(erro=> console.error('Erro na conexão com o mongoDB:',erro));

module.exports=mongoose;
