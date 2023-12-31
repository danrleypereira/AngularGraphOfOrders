import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './inventory-module/dashboard/dashboard.component';
import { CustomerComponent } from './users-module/customer/customer.component';
import { OrderComponent } from './inventory-module/order/order.component';
import { BrandComponent } from './inventory-module/brand/brand.component';

const routes: Routes = [
  {path: "dashboard", component: DashboardComponent},
  {path: "customer", component: CustomerComponent},
  {path: "orders/:brandId", component: OrderComponent},
  {path: "brands/:productId", component: BrandComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
