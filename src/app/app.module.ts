import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomePageComponent } from './view/home-page/home-page.component';
import { ContactDetailsComponent } from './view/contact-details/contact-details.component';
import { AddContactComponent } from './shared/add-contact/add-contact.component';
import { EditContactComponent } from './view/edit-contact/edit-contact.component';

import { DataService } from './shared/services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ContactDetailsComponent,
    AddContactComponent,
    EditContactComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],

  providers: [DataService],

  bootstrap: [AppComponent]
})

export class AppModule { }
