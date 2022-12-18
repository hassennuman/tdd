import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { IQuestion, ISection, IProduct } from 'src/app/models/model';

import { Router } from '@angular/router';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  products : IProduct[] = [];
  selectedSection : ISection;
  questions : IQuestion[];
  selectedProduct : IProduct;
  isProductSelected : boolean = false;

  constructor(private service : ProductService, private router : Router) { }

  ngOnInit(): void {
    this.service.getProducts().subscribe((data)=>{
      this.products = data;
    
    })
  }

  onProductSelect(product : IProduct){
    this.selectedProduct = product;
    this.isProductSelected = true;
  }
  onSectionSelected(section : ISection){
    console.log("Selected Section", section);
    this.selectedSection = section;
  }
  onTabChanged(event: MatTabChangeEvent): void {
    alert('Hell')
    switch (event.index) {
      case 0: // index of the tab
        // this is our stub tab for link
        alert(event.index)
        this.router.navigate(['dashboard']);
        break;
      case 1:
        // do stuff with content or do nothing :)
        break;
    }
  }

}
