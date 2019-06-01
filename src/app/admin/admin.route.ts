import { AdminComponent } from './admin.component';
import { CardComponent } from './card.component';
import { AdminGuard } from './admin.guard';
import { LoginComponent } from './login.component';

export const adminRoutes = [
      {
        path: '',
        component: AdminComponent,
        children: [
          { path: 'login', component: LoginComponent },
          { path: 'card', component: CardComponent, canActivate: [AdminGuard] },
          { path: '**', component: LoginComponent, redirectTo: 'login' }
        ]
      }
];

