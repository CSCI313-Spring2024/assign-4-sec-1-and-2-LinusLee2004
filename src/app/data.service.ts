import { Injectable, signal, computed } from '@angular/core';
import { Contact } from './models/contact.model';
import { CONTACTS } from './DefaultContacts';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private contacts= signal<Contact[]>(CONTACTS);
  private numContacts: number = 1;
  

  constructor() { }

  getContacts(): Contact[] {
    return this.contacts();
  }

  //Test
  // getContacts(): Contact[] {
  //   return [
  //     { id: 1, firstName: 'John', lastName: 'Doe', phone: '123-456-7890', email: 'john@example.com' },
  //     { id: 2, firstName: 'Jane', lastName: 'Smith', phone: '987-654-3210', email: 'jane@example.com' }
  //   ];
  // }
  

  // getContactById(id:number): Contact {
  //   return this.contacts[id];
  // }
  getContactById(id:number) {
    return this.contacts().find(contact => contact.id == id);
  }

  deleteContact(id: number) {
    this.contacts.set(this.contacts().filter(contact => contact.id != id));
  }

  addContact(contact: Contact) {
this.contacts.set([...this.contacts(), contact]);
  }

  editContact(edited: Contact) {
  this.contacts.set(
  this.contacts().map(contact => (contact.id == edited.id ? edited : contact))
);
  }

}
