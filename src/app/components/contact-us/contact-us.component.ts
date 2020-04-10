import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';

import swal from 'sweetalert2';
import { ContactService } from '../../services/contact.service';

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
  };

  constructor(private contactSrv: ContactService) {
    this.createContactObject(false);
  }

  ngOnInit() {
    this.createForm();
  }

  sendMail() {
    swal.fire({
      title: 'Enviando Correo',
      text: 'Por favor espere mientras se realiza el contacto con Pixel Canibal.',
      icon: 'info'
    });
    swal.showLoading();
    this.contactSrv.SendEmail(this.contactForm.value)
      .subscribe((observer: any) => {
        swal.fire({
          title: 'Correo Enviado',
          text: 'El mensaje fue enviado satisfactoriamente, gracias por contactarnos.',
          icon: 'success'
        });
      }, (error: any) => {
        console.log(error);
        swal.fire({
          title: 'Ocurrió un Error',
          text: 'No fue posible envíar el mensaje, por favor intentelo nuevamente.',
          icon: 'error'
        });
      });
  }

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
