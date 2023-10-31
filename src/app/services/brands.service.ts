import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ICategory {
  categoryId: number;
  categoryName: string;
}

export interface IProduct {
  productId: number;
  productName: string;
  categoryId: number;
  // add other product properties as needed
}

export interface IBrand {
  brandId: number;
  brandName: string;
  productId: number;
  // add other brand properties as needed
}

export interface IOrder {
  orderId: number;
  brandId: number;
  orderDate: string;
  customerId: string;
  // add other order properties as needed
}


// interface IBrand {

// }

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  private baseApiUrl = 'http://0.0.0.0:5091'; // replace with your API endpoint

  constructor(private http: HttpClient) { }

  getBrandsByProductId(productId: number): Observable<IBrand[]> {
    const url = `${this.baseApiUrl}/Brand/brands-by-product?productId=${productId}`;
    return this.http.get<IBrand[]>(url);
  }

  getProductsByCategoryId(categoryId: number): Observable<IProduct[]> {
    const url = `${this.baseApiUrl}/Product/products-by-category?categoryId=${categoryId}`;
    return this.http.get<IProduct[]>(url);
  }

  getOrdersByBrandId(brandId: number): Observable<IOrder[]> {
    const url = `${this.baseApiUrl}/Order?brandId=${brandId}`;
    return this.http.get<IOrder[]>(url);
  }

  getCategories(): Observable<ICategory[]> {
    const url = `${this.baseApiUrl}/Category/categories`;
    return this.http.get<ICategory[]>(url);
  }

  // Add other methods as needed to interact with your API
}
