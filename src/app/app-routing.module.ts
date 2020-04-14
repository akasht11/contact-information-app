import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './view/home-page/home-page.component';
import { ContactDetailsComponent } from './view/contact-details/contact-details.component';
import { AddContactComponent } from './shared/add-contact/add-contact.component';
import { EditContactComponent } from './view/edit-contact/edit-contact.component'

const routes: Routes = [
  {path : 'homepage',component:HomePageComponent},
  {path : 'contactdetails',component:ContactDetailsComponent},
  {path : 'addcontact', component:AddContactComponent},
  {path : 'editcontact/:id', component:EditContactComponent},
  {path : '**',component:HomePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }