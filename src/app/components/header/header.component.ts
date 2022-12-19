import { Component, OnInit } from '@angular/core';
import { headerConfig } from 'src/app/config/header/header';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  headerConfig = headerConfig;
  

  constructor() { }

  ngOnInit(): void {
  }

}
