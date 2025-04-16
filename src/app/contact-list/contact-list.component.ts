import { Component, inject, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Contact } from '../models/contact.model';
import { ContactCardComponent } from '../contact-card/contact-card.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-contact-list',
  imports: [CommonModule, ContactCardComponent, FormsModule],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css'
})
export class ContactListComponent implements OnInit {
contacts: Contact[] = [];

dataService = inject(DataService);
constructor() {}

ngOnInit(): void {
  this.contacts = this.dataService.getContacts();
}

//gets signal from ContactCard that the delete button has been pressed
onContactDeleted(id:number): void {
  this.dataService.deleteContact(id); // deletes contact
  this.contacts = this.dataService.getContacts(); //refreshes page with contact list after deleting contact
}
}
