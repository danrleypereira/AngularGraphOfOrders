import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { CustomerServices } from './services/customer/customer.service';
import { CustomerComponent } from './customer/customer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoggingInterceptor } from './logging-interceptor.service';
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
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoggingInterceptor,
      multi: true,
    },
    CustomerServices
  ],
  exports: [CustomerComponent]
})
export class UsersModule { }