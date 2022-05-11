import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interface/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiServerUrl="http://localhost:8080/api/v1/products";

  constructor(private http: HttpClient) { }

  public getAllProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.apiServerUrl}`);
  }

  public getProductById(productId: number): Observable<Product>{
    return this.http.get<Product>(`${this.apiServerUrl}/${productId}`);
  }


  public addProduct(product: Product): Observable<Product>{
    return this.http.post<Product>(`${this.apiServerUrl}`, product);
  }

  public editProductById(productId: number, product: Product): Observable<Product>{
    return this.http.put<Product>(`${this.apiServerUrl}/${productId}`, product);
  }

  public deleteProductById(productId: number): Observable<any>{
    return this.http.delete<any>(`${this.apiServerUrl}/${productId}`);
  }

  public findByProducts(keyword: any): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiServerUrl}/search/${keyword}`);
  }

}
