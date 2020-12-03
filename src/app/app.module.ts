import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

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
import {NgxCurrencyModule} from 'ngx-currency';
import { ProductEditComponent } from './product-edit/product-edit.component';
import {registerLocaleData} from '@angular/common';

import localeDe from '@angular/common/locales/de';
import localeDeExtra from '@angular/common/locales/extra/de';
import { ArtNoPipe } from './art-no.pipe';
import { ProductFilterPipe } from './product-filter.pipe';
import { MessageComponent } from './message/message.component';
import {LoginComponent} from "./login/login.component";
registerLocaleData(localeDe, 'de-DE', localeDeExtra);

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
    CategoryEditComponent,
    ProductEditComponent,
    ArtNoPipe,
    ProductFilterPipe,
    MessageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxCurrencyModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'de-DE'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
