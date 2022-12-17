import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IStrategy } from 'src/app/models/model';
import { StrategyService } from 'src/app/services/strategy.service';

@Component({
  selector: 'app-strategy-list',
  templateUrl: './strategy-list.component.html',
  styleUrls: ['./strategy-list.component.css']
})
export class StrategyListComponent implements OnInit {
  strategies: IStrategy[] = [];
  @Output() selectedStrategy: EventEmitter<IStrategy> = new EventEmitter();
  constructor(private service: StrategyService) {}


  ngOnInit(): void {
    this.service.getStratgies().subscribe((data) => {
      this.strategies = data;
    });
  }

  onStrategySelected(strategy: IStrategy) {
    this.selectedStrategy.emit(strategy);
  }

}
