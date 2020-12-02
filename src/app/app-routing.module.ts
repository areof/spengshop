import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListingComponent} from './product-listing/product-listing.component';
import {ProductNewComponent} from './product-new/product-new.component';
import {CategoryListingComponent} from './category-listing/category-listing.component';
import {CategoryNewComponent} from './category-new/category-new.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {CategoryEditComponent} from './category-edit/category-edit.component';

const routes: Routes = [{
  path: '',
  component: DashboardComponent
}, {
  path: 'product-listing',
  component: ProductListingComponent
}, {
  path: 'product-new',
  component: ProductNewComponent
}, {
  path: 'category-listing',
  component: CategoryListingComponent
}, {
  path: 'category-new',
  component: CategoryNewComponent
}, {
  path: 'category-edit/:id',
  component: CategoryEditComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
