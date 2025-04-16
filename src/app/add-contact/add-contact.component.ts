import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Contact } from '../models/contact.model';
import { DataService } from '../data.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './add-contact.component.html',
  styleUrl: './add-contact.component.css'
})
export class AddContactComponent {
contact: Contact = {
id : 0,
firstName: '',
lastName:  '',
phone: '',
email: ''
}

dataService = inject(DataService);

router = inject(Router)

onAddContact() {
  const contacts = this.dataService.getContacts();
  this.contact.id = contacts.length > 0 ? Math.max(...contacts.map(contact => contact.id)) + 1 : 1;
this.dataService.addContact(this.contact);
this.router.navigate(['/']);
}
}
