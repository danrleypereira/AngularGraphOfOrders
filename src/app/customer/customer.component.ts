import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  constructor(
    private customerServices: CustomerServices,
    private http: HttpClient,
    private route: ActivatedRoute
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
  // getCustomerById(id: number) {
  //   this.http
  //     .get<ICustomer>(`http://localhost:5091/Customer/${id}`)
  //     .subscribe((data) => {
  //       this.customer = data; // Wrap the single customer in an array to reuse the existing HTML template
  //     });
  // }

  // getCustomers(id: number) {
  //   this.customerServices.getCustomerById(this.customerId)
  //     .subscribe((data: ICustomer[]) => {
  //       this.customers = data;
  //     });
  // }

  // addCustomer(name: string, email: string) {
  //   this.http.post('http://127.0.0.1:5091/Customer', {
  //     name: name,
  //     email: email
  //   }).subscribe(() => {
  //     this.getCustomers();
  //   });
  // }

  // updateCustomer(id: number, name: string, email: string) {
  //   this.http.put(`http://localhost:5091/Customer/${id}`, {
  //     name: name,
  //     email: email
  //   }).subscribe(() => {
  //     this.getCustomers();
  //   });
  // }
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
    );;
  }
}
