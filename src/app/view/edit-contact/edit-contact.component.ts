import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactData, DataService } from 'src/app/shared/services/data.service';
import { Location } from '@angular/common';
import 'rxjs';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  id:number;
  data:object = {};
  contactobj:object = {};
  contacts: ContactData[];

  constructor(
    private route: ActivatedRoute, 
    private dataservice: DataService,
    private location: Location) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.contacts = this.dataservice.getContacts();
    for(var i = 0; i < this.contacts.length; i++) {
      if(this.contacts[i].id === this.id) {
         this.data = this.contacts[i];
      }
    }
  }

  updateContact(contact){
    this.contactobj = {
      "firstname": contact.firstname,
      "lastname": contact.lastname,
      "phonenumber": contact.phonenumber,
      "emailid": contact.emailid,
      "status": contact.status
    }
    this.location.back();
  }

}