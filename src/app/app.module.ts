import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TestData } from './testdata';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { UserService } from './user.service';
import { ActivateGuard } from './activate.guard';
import { RouterModule } from '@angular/router';
import { approutes } from './routes';
import { MerchantComponent } from './merchant/merchant.component';
import { DeactivateGuard } from './deactivate.guard';
import { BookService } from './book.service';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { viewDetailComponent } from './home/view-detail.component';
import { BookResolver } from './bookresolver';
import { CookieService } from 'ngx-cookie-service';
import { NumlistService } from './numlist.service';
import { Comp2Component } from './comp2/comp2.component';
import { Comp1Component } from './comp1/comp1.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    MerchantComponent,
    viewDetailComponent,
    Comp2Component,
    Comp1Component,
    
  ],
  imports: [
    BrowserModule,
    InMemoryWebApiModule.forRoot(TestData),
    RouterModule.forRoot(approutes),
    HttpClientModule,


  ],
  providers: [ActivateGuard,UserService,DeactivateGuard,BookService,BookResolver,CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
