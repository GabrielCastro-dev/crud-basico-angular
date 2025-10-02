import { Routes } from '@angular/router';
import { PaginaCadastroComponent } from './pages/pagina-cadastro/pagina-cadastro.component';
import { PaginaConsultaComponent } from './pages/pagina-consulta/pagina-consulta.component';

export const routes: Routes = [
    { path: '', redirectTo: '/cadastro', pathMatch: 'full' },
    { path: 'cadastro', component: PaginaCadastroComponent },
    { path: 'consulta', component: PaginaConsultaComponent }
];
