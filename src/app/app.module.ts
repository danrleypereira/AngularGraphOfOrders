import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { NgFor } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerComponent } from './customer/customer.component';
import { OrderComponent } from './order/order.component';
import { BrandComponent } from './brand/brand.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CustomerComponent,
    OrderComponent,
    BrandComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule, 
    MatSelectModule, 
    NgFor, 
    MatInputModule, 
    FormsModule,
    CanvasJSAngularChartsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
