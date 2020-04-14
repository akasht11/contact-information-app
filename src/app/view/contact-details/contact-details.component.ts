import { Component, OnInit } from '@angular/core';
import { ContactData, DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  contacts: ContactData[];

  constructor(
    private dataservice: DataService,
  ) { }

  ngOnInit() {
    this.contacts = this.dataservice.getContacts();
  }

  removecontact(data){
    if(confirm("Delete: Are You Sure... ?")){
      this.contacts.splice(this.contacts.indexOf(data),1);
      }
      
    }
  }