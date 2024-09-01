import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'crud-operations',
    loadChildren: () => import('./crud-operations/crud-operations.module').then( m => m.CrudOperationsPageModule)
  },
  {
    path: 'galarza-carreno-tabla',
    loadChildren: () => import('./galarza-carreno-tabla/galarza-carreno-tabla.module').then( m => m.GalarzaCarrenoTablaPageModule)
  },
  {
    path: 'galarza-carreno-form',
    loadChildren: () => import('./galarza-carreno-form/galarza-carreno-form.module').then( m => m.GalarzaCarrenoFormPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
