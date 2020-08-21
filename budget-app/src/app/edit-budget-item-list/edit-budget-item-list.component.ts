import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ModalBudget } from 'src/shared/budget-item.model'
import { EditItemModalComponent } from '../edit-item-modal/edit-item-modal.component'
import { MatDialog } from '@angular/material/dialog'

@Component({
  selector: 'app-edit-budget-item-list',
  templateUrl: './edit-budget-item-list.component.html',
  styleUrls: ['./edit-budget-item-list.component.scss']
})


export class EditBudgetItemListComponent implements OnInit {
  constructor(public dialog: MatDialog) { }

  

  @Input() budgetItems: ModalBudget
  @Output() delete: EventEmitter<ModalBudget> = new EventEmitter<ModalBudget>()
  @Output() update: EventEmitter<UpdateEvent> = new EventEmitter<UpdateEvent>()

  onDeleteButton(item: ModalBudget){
    this.delete.emit(item)
  }

  onCardClicked(item: ModalBudget){
    const dialogRef = this.dialog.open(EditItemModalComponent, {
      width: '580px',
      data: item
    })

    dialogRef.afterClosed().subscribe(result => {
      //Result authentication
      if(result){
        this.update.emit({
          old: item,
          new: result
          
        })
      }
    })
  }

  ngOnInit(): void {
  }

}
export interface UpdateEvent {
  old: ModalBudget
  new: ModalBudget
}
