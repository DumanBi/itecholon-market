import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreComponent } from './store/store.component';
import { CardComponent } from './card/card.component';
import { ProductsService } from './service/products.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProductRepository } from './model/product.repository';
import { AccessOriginInterceptor } from './interceptor/access-origin.interceptor';
import { ModelModule } from './model/model.module';
import { CartSummaryComponent } from './store/cardSummary.component';
import { Cart } from './model/card.model';
import {ToasterModule, ToasterService} from 'angular2-toaster';
import { CartDetailComponent } from './store/cardDetail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductComponent } from './store/product.component';

@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    CardComponent,
    CartDetailComponent,
    CartSummaryComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ModelModule,
    ToasterModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [
    ProductsService,
    ProductRepository,
    Cart,
    ToasterService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AccessOriginInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
