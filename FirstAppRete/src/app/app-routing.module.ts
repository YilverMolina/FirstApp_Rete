import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProcessViewerComponent } from './components/process-viewer/process-viewer.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/', data: {
      title: 'Main'
    }, pathMatch: 'full'
  },
  { path: 'processViewer', component: ProcessViewerComponent },
  /* { path: '404', component: PageNotFoundComponent },
  {
    path: 'main',
    component: UsersComponent,
    children: [
      { path: 'home', loadChildren: 'app/components/header/header.component' },
      { path: 'about', loadChildren: 'app/about/about.module#AboutModule' },
      { path: 'table', loadChildren: 'app/table/table.module#TableModule' },
      { path: 'user', loadChildren: 'app/user-list/user-list.module#UserListModule' }
    ]
  },*/
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
