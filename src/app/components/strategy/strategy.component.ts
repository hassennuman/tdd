import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { IProduct, IStrategy } from 'src/app/models/model';
import { StrategyService } from 'src/app/services/strategy.service';
@Component({
  selector: 'app-strategy',
  templateUrl: './strategy.component.html',
  styleUrls: ['./strategy.component.css'],
})
export class StrategyComponent implements OnInit {
  @Input() selectedStrategy: IStrategy;
  selectedProduct: IProduct;
  selectedProductId : string = "";

  constructor(private service: StrategyService) {}

  ngOnInit(): void {}

  onSelectedProduct(event: any) {
    if (event && event.target && event.target.value){
      this.selectedProductId = event.target.value;
      if (this.selectedProductId){
        this.service.getProductById(this.selectedProductId).subscribe((p)=>{
          this.selectedProduct = p;
        })
      }
    }
  }
}
