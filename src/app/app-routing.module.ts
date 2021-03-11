import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'admin-system',
    loadChildren: () =>
      import('./pages/admin-system/admin-system.module').then(
        (m) => m.AdminSystemPageModule
      ),
  },
  {
    path: 'tabs-admin',
    loadChildren: () =>
      import('./pages/tabs-admin/tabs-admin.module').then(
        (m) => m.TabsAdminPageModule
      ),
  },
  {
    path: 'transaction',
    loadChildren: () =>
      import('./pages/transaction/transaction.module').then(
        (m) => m.TransactionPageModule
      ),
  },
  {
    path: 'calculator',
    loadChildren: () =>
      import('./pages/calculator/calculator.module').then(
        (m) => m.CalculatorPageModule
      ),
  },
  {
    path: 'commission',
    loadChildren: () =>
      import('./pages/commission/commission.module').then(
        (m) => m.CommissionPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
