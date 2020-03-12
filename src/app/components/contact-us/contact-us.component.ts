import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styles: []
})
export class ContactUsComponent implements OnInit {

  public contactForm: FormGroup;
  private contact: {
    firstName?: string,
    lastName?: string,
    email: string,
    subject: string,
    message: string
  }

  constructor() {
    this.createContactObject(false);
  }

  ngOnInit() {
    this.createForm();
  }

  sendMessage() { }

  private createForm() {
    this.contactForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl('', [Validators.required, Validators.email]),
      subject: new FormControl('', [Validators.required, Validators.maxLength(80)]),
      message: new FormControl('', [Validators.required, Validators.maxLength(600)])
    });

    this.contactForm.setValue(this.contact);
  }

  private createContactObject(reset: boolean) {
    if (reset) {
      this.contactForm.reset({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
      });
      return;
    }
    this.contact = {
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: ''
    };
  }

}
