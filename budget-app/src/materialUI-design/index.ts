import { NgModule, Inject } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog'
import { MatInputModule } from '@angular/material/input'
import { MatTableModule }  from '@angular/material/table'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatMenuModule } from '@angular/material/menu'
import { MatIconModule } from '@angular/material/icon'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { ModalBudget } from 'src/shared/budget-item.model'
@NgModule({
    imports:[
        CommonModule,
        MatButtonModule,
        MatCardModule,
        MatDialogModule,
        MatInputModule,
        MatTableModule,
        MatToolbarModule,
        MatMenuModule,
        MatIconModule,
        MatProgressSpinnerModule,
        
        
    ],
    exports:[
        CommonModule,
        MatButtonModule,
        MatCardModule,
        MatDialogModule,
        MatInputModule,
        MatTableModule,
        MatToolbarModule,
        MatMenuModule,
        MatIconModule,
        MatProgressSpinnerModule,
        
        
    ],
})
export class CustomMaterialModule{
    //export PATH="$HOME/.yarn/bin:$HOME/.config/yarn/global/node_modules/.bin:$PATH"
//     constructor(
//         public dialogRef: MatDialogRef<EditItemModalComponent>,
//         @Inject(MAT_DIALOG_DATA) public item: ModalBudget) { }
 }