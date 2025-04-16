import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Contact } from '../models/contact.model';
import { DataService } from '../data.service';
import { routes } from '../app.routes';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-edit-contact',
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './edit-contact.component.html',
  styleUrl: './edit-contact.component.css'
})
export class EditContactComponent implements OnInit{

  contact!: Contact;

  dataService = inject(DataService);

  router = inject(Router);

  route = inject(ActivatedRoute);

  ngOnInit(): void {
    // Get the contact ID from the URL
    const contactId = Number(this.route.snapshot.paramMap.get('id'));
    
    // Retrieve the contact data by ID
    this.contact = {...this.dataService.getContactById(contactId)!};


  }

onSubmit() {
  this.dataService.editContact(this.contact);
  this.router.navigate([''])
}

  // onSubmit(): void {
  //   this.dataService.deleteContact(this.contact.id);       // Remove old one
  //   this.dataService.addContact({ ...this.contact });     // Add updated one (could also use an update method)                         // Go back to list
  // }

}
