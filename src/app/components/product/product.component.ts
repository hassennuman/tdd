import { Component, Input, OnInit } from '@angular/core';
import { IProduct, ISection, IStrategy } from 'src/app/models/model';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() selectedStrategy : IStrategy;
  @Input() selectedProduct : IProduct;
  selectedSection : ISection;

  constructor() { }

  ngOnInit(): void {
    
  }

  onSectionSelected(section : ISection){
    console.log("Selected Section", section);
    
   this.selectedSection = section;
  }

}
