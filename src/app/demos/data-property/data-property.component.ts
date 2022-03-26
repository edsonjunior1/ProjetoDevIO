import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-data-property',
  templateUrl: './data-property.component.html',
  styleUrls: ['./data-property.component.css']
})
export class DataPropertyComponent implements OnInit {
  public contadorClique: number = 0;
  public altImage: string = 'Imagem vinda de uma API';
  public imageUrl: string = 'https://angular.io/assets/images/logos/angular/angular.svg';
  public nome: string = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  infoClique() {
    alert('Você clicou em info!');
  }

  incrementaClique() {
    this.contadorClique += 1;
  }

  zerarClique(): void {
    this.contadorClique = 0;
  }
}
