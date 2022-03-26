import { ProdutosService } from './services/produtos.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MenuComponent } from './navegacao/menu/menu.component';
import { HomeComponent } from './navegacao/home/home.component';
import { FooterComponent } from './navegacao/footer/footer.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { RouterModule } from '@angular/router';
import { routes } from './app-routing.module';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DataPropertyComponent } from './demos/data-property/data-property.component';
import { FormsModule } from '@angular/forms';
import { ListaProdutosComponent } from './produtos/lista-produtos/lista-produtos.component';

registerLocaleData(localePt);
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    SobreComponent,
    ContatoComponent,
    DataPropertyComponent,
    ListaProdutosComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    [RouterModule.forRoot(routes)],
    FormsModule,
    HttpClientModule,
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }, ProdutosService],
  bootstrap: [AppComponent],
})
export class AppModule {}
