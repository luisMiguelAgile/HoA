import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CarruselCompentesComponent } from './carrusel-compentes/carrusel-compentes.component';
import { ColaboraComponent } from './colabora/colabora.component';
import { EntregaComponent } from './entrega/entrega.component';
import { MejoraComponent } from './mejora/mejora.component';
import { ReflexionaComponent } from './reflexiona/reflexiona.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: CarruselCompentesComponent },
  { path: 'colabora', component: ColaboraComponent },
  { path: 'entrega', component: EntregaComponent },
  { path: 'reflexiona', component: ReflexionaComponent },
  { path: 'mejora', component: MejoraComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CarruselCompentesComponent,
    ColaboraComponent,
    EntregaComponent,
    MejoraComponent,
    ReflexionaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
