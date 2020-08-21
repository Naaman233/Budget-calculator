import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireAuthGuard} from '@angular/fire/auth-guard'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { EditItemModalComponent } from './edit-item-modal/edit-item-modal.component';
import { AddChangesModalComponent } from './add-changes-modal/add-changes-modal.component';
import { EditBudgetItemListComponent } from './edit-budget-item-list/edit-budget-item-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BudgetItemCardComponent } from './edit-budget-item-list/budget-item-card/budget-item-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations' 
import { CustomMaterialModule } from '../materialUI-design/index'

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    EditItemModalComponent,
    AddChangesModalComponent,
    EditBudgetItemListComponent,
    BudgetItemCardComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CustomMaterialModule
  ],
  providers: [AngularFireAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
