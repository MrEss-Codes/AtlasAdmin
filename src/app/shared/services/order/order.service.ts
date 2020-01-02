import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductStatus } from '../../Models/productStatus';

@Injectable({ providedIn: 'root' })
export class OrderService {
  apiUrl = 'https://localhost:5001/api/';

  constructor(private http: HttpClient) { }

  getAllOrders(): Observable<ProductStatus[]> {
    return this.http.get<ProductStatus[]>(this.apiUrl + 'productStatus');
  }

  getOrderByID(id: string): Observable<ProductStatus> {
    return this.http.get<ProductStatus>(this.apiUrl + 'products/' + id)
  }
  updateOrder(updatedStatus: ProductStatus): Observable<ProductStatus> {
    return this.http.put<ProductStatus>(this.apiUrl + 'productStatus', updatedStatus );
  }
  deleteOrder(id: string) {
    return this.http.delete<ProductStatus>(this.apiUrl + 'products/' + id);
  }
}
