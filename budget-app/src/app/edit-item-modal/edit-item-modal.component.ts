import { Component, OnInit, Inject } from '@angular/core';
import { ModalBudget } from 'src/shared/budget-item.model'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'  

@Component({
  selector: 'app-edit-item-modal',
  templateUrl: './edit-item-modal.component.html',
  styleUrls: ['./edit-item-modal.component.scss']
})
export class EditItemModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EditItemModalComponent>,
    @Inject(MAT_DIALOG_DATA) public item: ModalBudget) { }

onSubmitted(updatedItem: ModalBudget){
  this.dialogRef.close(updatedItem)
}
  ngOnInit(): void {
  }

}
