import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'inicio',
        loadChildren: () => import('../inicio/inicio.module').then( m => m.InicioPageModule)
      },
      {
        path: 'menu-opciones',
        loadChildren: () => import('../menu-opciones/menu-opciones.module').then( m => m.MenuOpcionesPageModule)
      },
      {
        path: 'datos-usuario',
        loadChildren: () => import('../datos-usuario/datos-usuario.module').then( m => m.DatosUsuarioPageModule)
      },
      {
        path: 'acerca-de',
        loadChildren: () => import('../acerca-de/acerca-de.module').then( m => m.AcercaDePageModule)
      },
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/inicio',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
