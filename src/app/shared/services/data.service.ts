import { Injectable } from '@angular/core';


export interface ContactData {
  id: number;
  firstname: string;
  lastname: string;
  phonenumber: number;
  emailid: string;
  status: String;
}

@Injectable({
  providedIn: 'root'
})

export class DataService {
  
  private readonly contacts: ContactData[] = [

    { id: 1, firstname: 'Akash', lastname: 'Takawale', phonenumber: 9623833387, emailid: 'akash.takawale11@gmail.com', status: "Active" },
    { id: 2, firstname: 'Mohit', lastname: 'Patil', phonenumber: 9977553322, emailid: 'mpatil@gmail.com', status: "Inactive" },
    { id: 3, firstname: 'John', lastname: 'Thompson', phonenumber: 8876547722, emailid: 'jthomson88@yahoo.com', status: "Active" },
    { id: 4, firstname: 'Smita', lastname: 'Wagh', phonenumber: 7565231100, emailid: 'waghs@gmail.com', status: "Active" },
    { id: 5, firstname: 'Rohit', lastname: 'Jahagirdar', phonenumber: 9988775544, emailid: 'rojahagir@gmail.com', status: "Inactive" },
  ];

  getContacts(): ContactData[] {
    return this.contacts;
  }
}
