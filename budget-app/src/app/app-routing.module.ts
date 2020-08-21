import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { EditBudgetItemListComponent } from './edit-budget-item-list/edit-budget-item-list.component';
import { EditItemModalComponent } from './edit-item-modal/edit-item-modal.component';
import { AddChangesModalComponent } from './add-changes-modal/add-changes-modal.component';


/**
 *  Firebase Api call: import { AngularFireAuthGuard, redirectUnauthorizedTo} from '@angular/fire/auth-guard'
 *  using the sdk function canActivate
 *  canActivate: [AngularFireGuard],
 * 
 *  using a custom pipes, create a pipe that redirects 
 *  any unauthorizedAccess to the landing page
 * 
 *  const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo([''])
 */

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path:'edit-budget-item-list', component: EditBudgetItemListComponent},
  {path: 'edit-item-modal', component: EditItemModalComponent},
  {path: 'add-changes-modal', component: AddChangesModalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
