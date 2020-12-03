import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProductListingComponent} from './product-listing/product-listing.component';
import {ProductNewComponent} from './product-new/product-new.component';
import {CategoryListingComponent} from './category-listing/category-listing.component';
import {CategoryNewComponent} from './category-new/category-new.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {CategoryEditComponent} from './category-edit/category-edit.component';
import {ProductEditComponent} from './product-edit/product-edit.component';
import {AuthGuardService} from './services/auth-guard.service';
import {LoginComponent} from './login/login.component';
import {AdminComponent} from './admin/admin.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'admin',
  pathMatch: 'full'
}, {
  path: 'login',
  component: LoginComponent
}, {
  path: 'admin',
  component: AdminComponent,
  canActivate: [AuthGuardService],
  children: [{
    path: '',
    component: DashboardComponent,
  }, {
    path: 'product-listing',
    component: ProductListingComponent
  }, {
    path: 'product-new',
    component: ProductNewComponent
  }, {
    path: 'product-edit/:id',
    component: ProductEditComponent
  }, {
    path: 'category-listing',
    component: CategoryListingComponent
  }, {
    path: 'category-new',
    component: CategoryNewComponent
  }, {
    path: 'category-edit/:id',
    component: CategoryEditComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
