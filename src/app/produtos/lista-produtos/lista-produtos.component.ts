import { IProdutos } from './../../models/produtos.model';
import { ProdutosService } from './../../services/produtos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css'],
})
export class ListaProdutosComponent implements OnInit {
  public produtos: IProdutos[] = [];

  constructor(private produtoService: ProdutosService) {}

  ngOnInit(): void {
    this.obterProdutos();
  }

  obterProdutos() {
    this.produtoService.getProdutos().subscribe({
      next: (produtos) => {
        this.produtos = produtos;
        console.log(produtos);
      },
      error: (erro) => console.log(erro),
    });
  }
}
