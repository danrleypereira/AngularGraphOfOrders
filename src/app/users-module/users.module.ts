import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { CustomerServices } from './services/customer/customer.service';
import { CustomerComponent } from './customer/customer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [ CustomerComponent ],
  imports: [
    CommonModule,
    NgFor,
    FormsModule,
    MatCardModule,
    MatFormFieldModule, 
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  providers: [CustomerServices],
  exports: [CustomerComponent]
})
export class UsersModule { }