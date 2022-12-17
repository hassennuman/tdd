import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IFundType } from '../models/model';
import { templates } from './../mockData/template';

@Injectable({
  providedIn: 'root',
})
export class FundService {
  constructor() {}

  getTemplates () : Observable<IFundType[]>{
    return of(templates);
  }

}
