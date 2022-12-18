import { Injectable,  } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IProduct } from '../models/model';
import { products } from '../mockData/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts() : Observable<IProduct[]>{
    return of(products);
  }

  getProduct(product : IProduct){
    
  }
}
