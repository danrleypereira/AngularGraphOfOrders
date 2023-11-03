import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ICustomer {
    id: number,
    name: string,
    email: string
  }

@Injectable({
    providedIn: 'root'
})
export class CustomerServices{
    private baseApiUrl = 'http://127.0.0.1:5091';

    constructor(private http: HttpClient) { }

    // getCustomers(itemsPerPage: number, page: number): Observable<ICustomer[]> {
    //     const url = `${this.baseApiUrl}/Customer`;
    //     const params = new HttpParams()
    //       .set('itemsPerPage', itemsPerPage.toString())
    //       .set('page', page.toString());
    //     return this.http.get<ICustomer[]>(url, { params });
    //   }
    getCustomers(): Observable<ICustomer[]> {
        const url = `${this.baseApiUrl}/Customer`;
        console.log({CustomerService: [`getting customer`, url]});
        
        return this.http.get<ICustomer[]>(url);
    }      

    getCustomerById(customerId: number): Observable<ICustomer> {
        const url = `${this.baseApiUrl}/Customer/${customerId}`;
        console.log({CustomerService: [`getting customer by id ${customerId}`, url]});
        return this.http.get<ICustomer>(url);
    }

    addCustomer(name: string, email: string):  Observable<ICustomer>  {
        const url = `${this.baseApiUrl}/Customer/`;
        const body = { name, email }; 
        return this.http.post<ICustomer>(url, body);
    }
    updateCustomer(customerId: number, name: string, email: string) {
        const url = `${this.baseApiUrl}/Customer/${customerId}`;
        const body = { name, email }; 
       return this.http.put<ICustomer>(url, body);
    }
}