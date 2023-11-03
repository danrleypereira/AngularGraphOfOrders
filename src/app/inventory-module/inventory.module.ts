import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandComponent } from './brand/brand.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrderComponent } from './order/order.component';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    DashboardComponent,
    OrderComponent,
    BrandComponent],
  imports: [
    CommonModule,
    CanvasJSAngularChartsModule,
    MatFormFieldModule, 
    MatSelectModule, 
    MatInputModule, 
  ],
  exports: [BrandComponent]
})
export class InventoryModule {}
