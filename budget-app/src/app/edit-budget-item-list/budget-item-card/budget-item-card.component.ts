import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { ModalBudget } from 'src/shared/budget-item.model'

@Component({
  selector: 'app-budget-item-card',
  templateUrl: './budget-item-card.component.html',
  styleUrls: ['./budget-item-card.component.scss']
})
export class BudgetItemCardComponent implements OnInit {

  constructor() { }
  @Input() item: ModalBudget
  @Input() xButtonClick: EventEmitter<any> = new EventEmitter<any>()
  @Input() cardClick: EventEmitter<any> = new EventEmitter<any>()

  onXButtonClick(){
    this.xButtonClick.emit()
  }

  onCardClick(){
    this.cardClick.emit()
  }

  ngOnInit(): void {
  }

}
