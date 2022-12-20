import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { IProduct, ISection, ITemplate } from 'src/app/models/model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit, OnChanges {
  @Input() selectedProduct: IProduct;
  templates: ITemplate[] = [];
  selectedSection: ISection;

  constructor() {}

  ngOnInit(): void {
    this.selectProduct();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.selectProduct();
  }

  selectProduct() {
    if (this.selectedProduct) {
      this.templates = this.selectedProduct.templates;
      console.log('Product', this.selectedProduct.id);
    }
  }

  onSectionSelected(section: ISection) {
    this.selectedSection = section;
  }
}
