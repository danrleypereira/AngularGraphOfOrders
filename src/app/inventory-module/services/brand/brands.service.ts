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
}

export interface IBrand {
  brandId: number;
  brandName: string;
  productId: number;
}

export interface IOrder {
  orderId: number;
  brandId: number;
  orderDate: string;
  customerId: string;
}

@Injectable()
export class BrandsService {

  private baseApiUrl = 'http://127.0.0.1:5091'; 

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

}
