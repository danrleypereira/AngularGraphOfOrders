import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

type ICustomer = {
  id: number,
  name: string,
  email: string
}

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  public customers!: ICustomer[];
  public customer!: ICustomer;
  public customerId!: number;

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.customerId = +params['id']; // The '+' operator converts the parameter value to a number
      if (this.customerId) {
        this.getCustomerById(this.customerId);
      } else {
        this.customer = {
          id: 0,
          name: '',
          email: ''
        }
        this.getCustomers();
      }
    });
  }

  getCustomerById(id: number) {
    this.http
      .get<ICustomer>(`http://localhost:5091/Customer/${id}`)
      .subscribe((data) => {
        this.customer = data; // Wrap the single customer in an array to reuse the existing HTML template
      });
  }

  getCustomers() {
    this.http.get('http://0.0.0.0:5091/Customer')
      .subscribe((data: any) => {
        this.customers = data;
      });
  }

  addCustomer(name: string, email: string) {
    this.http.post('http://0.0.0.0:5091/Customer', {
      name: name,
      email: email
    }).subscribe(() => {
      this.getCustomers();
    });
  }

  updateCustomer(id: number, name: string, email: string) {
    this.http.put(`http://localhost:5091/Customer/${id}`, {
      name: name,
      email: email
    }).subscribe(() => {
      this.getCustomers();
    });
  }
}
