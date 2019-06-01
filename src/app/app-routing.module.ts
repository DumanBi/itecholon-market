import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreComponent } from './store/store.component';
import { CardComponent } from './card/card.component';
import { CartDetailComponent } from './store/cardDetail.component';

const routes: Routes = [
  {path: '', component: StoreComponent},
  {path: 'card', component: CardComponent},
  {path: 'card-detail', component: CartDetailComponent},
  {path: 'admin', loadChildren: './admin/admin.module#AdminModule'},
  {path: '**', redirectTo: '/'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
