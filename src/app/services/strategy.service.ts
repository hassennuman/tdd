import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IProduct, IStrategy } from '../models/model';
import { strategies } from '../mockData/strategy';
@Injectable({
  providedIn: 'root',
})
export class StrategyService {
  constructor() {}

  getStratgies(): Observable<IStrategy[]> {
    return of(strategies);
  }

  getProductById(id: string): Observable<IProduct> {
    let product : IProduct= { } as IProduct;
    strategies.map((s) => {
      s.products?.find((p) => {
        if (p.id == id){
          product = p
        }
      });
    
    });
   
    return of(product);
  }
}
