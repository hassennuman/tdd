import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { IProduct } from 'src/app/models/model';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: IProduct[] = [];
  selectedProduct: IProduct;
  isProductSelected: boolean = false;

  constructor(private service: ProductService) {}

  ngOnInit(): void {
    this.service.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  onChangeProduct(event: any) {
    console.log("Event", event);
    if (event && event.target) {
      const id = event.target.value;
      this.selectedProduct = this.products.find((p) => p.id == id) as IProduct;
      this.service.getProduct(id).subscribe((p) => {
        this.selectedProduct = p;
        this.isProductSelected = this.selectedProduct.id == id;
      });
    }
  }
}
