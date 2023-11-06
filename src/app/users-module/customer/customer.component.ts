import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  CustomerServices,
  ICustomer,
} from '../services/customer/customer.service';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit {
  public customers!: ICustomer[];
  public customer!: ICustomer;
  public customerId!: number;
  selectedCustomer: any;

  constructor(
    private customerServices: CustomerServices,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    console.log({ ngOnInit: 'starting' });
    this.route.queryParams.subscribe((params) => {
      this.customerId = +params['id']; // The '+' operator converts the parameter value to a number
      if (this.customerId) {
        console.log({ ngOnInit: `getting customer ${this.customerId}` });
        this.customerServices.getCustomerById(this.customerId).subscribe(
          (customerResponse) => {
            this.customer = customerResponse;
          },
          (error) => console.error(error)
        );
      } else {
        this.customer = {
          id: 0,
          name: '',
          email: '',
        };
        console.log({ ngOnInit: `else customer ${this.customerId}` });
      }
    });
    this.customerServices.getCustomers().subscribe(
      (customers) => {
        this.customers = customers;
      },
      (error) => console.error(error)
    );
  }
  updateCustomer(id: number, name: string, email: string) {
    this.customerServices.updateCustomer(id, name, email).subscribe(
      (customer) => {
        this.customer = customer;
      },
      (error) => console.error(error)
    );
  }
  addCustomer(name: string, email: string) {
    this.customerServices.addCustomer(name, email).subscribe(
      (customer) => {
        this.customer = customer;
      },
      (error) => console.error(error)
    );
  }
}
