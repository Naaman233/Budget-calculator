import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { EditItemModalComponent } from './edit-item-modal/edit-item-modal.component';
import { AddChangesModalComponent } from './add-changes-modal/add-changes-modal.component';
import { EditBudgetItemListComponent } from './edit-budget-item-list/edit-budget-item-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    EditItemModalComponent,
    AddChangesModalComponent,
    EditBudgetItemListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
