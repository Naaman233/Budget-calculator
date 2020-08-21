import { Component, OnInit } from '@angular/core';
import { ModalBudget } from 'src/shared/budget-item.model'

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor() { }
    title = "Budget Calculator"
    items: ModalBudget[] = new Array<ModalBudget>()
    totalBudget: number = 0

    addItem(eventNewItem: ModalBudget){
      this.items.push(eventNewItem)
      this.totalBudget += eventNewItem.amount
    }

    deleteItem(eventItem: ModalBudget){
      let index = this.items.indexOf(eventItem)
      this.items.splice(index,1)
      this.totalBudget -= eventItem.amount
    }

   

  ngOnInit(): void {
  }

}
