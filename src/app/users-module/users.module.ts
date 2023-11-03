import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { CustomerServices } from './services/customer/customer.service';
import { CustomerComponent } from './customer/customer.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ CustomerComponent ],
  imports: [
    CommonModule,
    NgFor,
    FormsModule
  ],
  providers: [CustomerServices],
  exports: [CustomerComponent]
})
export class UsersModule { }