import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListingComponent} from './product-listing/product-listing.component';
import {ProductNewComponent} from './product-new/product-new.component';
import {CategoryListingComponent} from './category-listing/category-listing.component';
import {CategoryNewComponent} from './category-new/category-new.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {CategoryEditComponent} from './category-edit/category-edit.component';
import {ProductEditComponent} from './product-edit/product-edit.component';
import {AuthGuardService} from './services/auth-guard.service';
import {LoginComponent} from './login/login.component';

const routes: Routes = [{
  path: '',
  component: DashboardComponent,
  canActivate: [ AuthGuardService ]
}, {
  path: 'login',
  component: LoginComponent
}, {
  path: 'product-listing',
  component: ProductListingComponent,
  canActivate: [ AuthGuardService ]
}, {
  path: 'product-new',
  component: ProductNewComponent,
  canActivate: [ AuthGuardService ]
}, {
  path: 'product-edit/:id',
  component: ProductEditComponent,
  canActivate: [ AuthGuardService ]
}, {
  path: 'category-listing',
  component: CategoryListingComponent,
  canActivate: [ AuthGuardService ]
}, {
  path: 'category-new',
  component: CategoryNewComponent,
  canActivate: [ AuthGuardService ]
}, {
  path: 'category-edit/:id',
  component: CategoryEditComponent,
  canActivate: [ AuthGuardService ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
