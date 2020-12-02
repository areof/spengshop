import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductFormComponent } from './product-form/product-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CategoryFormComponent } from './category-form/category-form.component';
import { ProductNewComponent } from './product-new/product-new.component';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { CategoryNewComponent } from './category-new/category-new.component';
import { CategoryListingComponent } from './category-listing/category-listing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {HttpClientModule} from '@angular/common/http';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import {NgxCurrencyModule} from "ngx-currency";

@NgModule({
  declarations: [
    AppComponent,
    ProductFormComponent,
    CategoryFormComponent,
    ProductNewComponent,
    ProductListingComponent,
    CategoryNewComponent,
    CategoryListingComponent,
    DashboardComponent,
    CategoryEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxCurrencyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
