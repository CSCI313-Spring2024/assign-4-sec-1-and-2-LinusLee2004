import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { DataService } from '../data.service';
import { Data, Router, RouterLink } from '@angular/router';
import { Contact } from '../models/contact.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-card',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './contact-card.component.html',
  styleUrl: './contact-card.component.css'
})
export class ContactCardComponent {
@Input() contact!: Contact;

//Creates emitter that will handle deleting contacts, takes in number for id
@Output() contactDeleted = new EventEmitter<number>();

constructor() {}
dataService = inject(DataService);

//Sends signal to parent (ContactList) that contact with (id) has been deleted
deleteContact(id:number): void {
  this.contactDeleted.emit(this.contact.id);
}

}
