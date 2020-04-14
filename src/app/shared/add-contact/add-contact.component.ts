import { Component, OnInit } from '@angular/core';
import { ContactData, DataService } from 'src/app/shared/services/data.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  contacts: ContactData[];
  sequence: number;
  id: number;

  constructor(
    private dataservice: DataService,
    private location: Location
  ) { }

  ngOnInit() {
    this.contacts = this.dataservice.getContacts();
    this.sequence = 2;
  }
  
  onSubmit(data : any){

    if(data.firstname!=""){
    this.sequence = this.sequence + 1;
    data.id = this.sequence;
    this.contacts.push(data);
    this.location.back();
    
    }
  }

  contactForm = new FormGroup({
    firstname: new FormControl('', [
      Validators.required,
      Validators.pattern("^[a-zA-Z]+$")
    ]),
    lastname: new FormControl('',[
      Validators.required,
      Validators.pattern("^[a-zA-Z]+$")
    ]),
    phonenumber: new FormControl('',[
      Validators.required,
      Validators.pattern("^[0-9]{10,10}$")
    ]),
    emailid: new FormControl('',[
      Validators.required,
      Validators.email
    ]),
    status: new FormControl('',[
      Validators.required,
      Validators.pattern("^[a-zA-Z]+$")
    ])
    });
}