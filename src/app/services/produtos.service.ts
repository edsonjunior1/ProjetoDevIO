import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProdutos } from '../models/produtos.model';

@Injectable({
  providedIn: 'root',
})
export class ProdutosService {
  protected urlService: string = 'http://localhost:3000/';
  public urlProdutos: string = 'produtos';

  constructor(private http: HttpClient) {}

  getProdutos(): Observable<IProdutos[]> {
    return this.http.get<IProdutos[]>(this.urlService + this.urlProdutos);
  }
}
