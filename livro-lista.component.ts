import { Component } from '@angular/core';

@Component({
  selector: 'app-livro-lista',
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.less']
})
export class LivroListaComponent {editoras:[]=
  livros:[]=
  constructor(){private servEditora{ControleEditoraService}
  private servLivros{ControleLivroService}}
  ngOnInit(){obterTodos=livros.then()}
  excluir=>{codigo:String=;obterTodos.then()}
  obterNome=>{codEditora:number=;getNomeEditora; return "editora harry potter"}
}
