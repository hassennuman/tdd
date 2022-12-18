import { Component, Input, OnInit } from '@angular/core';
import { IProduct, ISection, ITemplate } from 'src/app/models/model';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  @Input() selectedProduct : IProduct;
  templates : ITemplate[] = [];
  selectedSection : ISection;

  constructor() { }

  ngOnInit(): void {
    if (this.selectedProduct){
      this.templates = this.selectedProduct.templates;
    }
    
  }

  onSectionSelected(section : ISection){
   this.selectedSection = section;
  }

}
