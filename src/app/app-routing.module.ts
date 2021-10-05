import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitComponent } from './pages/init/init.component';
import { GotyComponent } from './pages/goty/goty.component';

const routes: Routes = [
  { path: 'init',  component: InitComponent},
  { path: 'goty', component: GotyComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'init' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
