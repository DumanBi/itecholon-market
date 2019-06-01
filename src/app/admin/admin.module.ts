import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from '../admin/admin.component';
import { RouterModule } from '@angular/router';
import { adminRoutes } from './admin.route';
import { CardComponent } from './card.component';
import { LoginComponent } from './login.component';
import { LoginService } from './login.service';
import { AdminGuard } from './admin.guard';

@NgModule({
  declarations: [AdminComponent, CardComponent, LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes)
  ],
  providers: [LoginService, AdminGuard]
})
export class AdminModule { }
