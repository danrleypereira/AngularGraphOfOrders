import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerComponent } from './customer/customer.component';
import { OrderComponent } from './order/order.component';
import { BrandComponent } from './brand/brand.component';

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
