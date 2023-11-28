import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './inventory-module/dashboard/dashboard.component';
import { CustomerComponent } from './users-module/customer/customer.component';
import { OrderComponent } from './inventory-module/order/order.component';
import { BrandComponent } from './inventory-module/brand/brand.component';
import { PokemonCardComponent } from './pokemon-module/card/card.component';

const routes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "customer", component: CustomerComponent },
  { path: "orders/:brandId", component: OrderComponent },
  { path: "brands/:productId", component: BrandComponent },
  { path: 'card/:id', component: PokemonCardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
