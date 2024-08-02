import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent implements OnInit {
  contactUsForm: FormGroup;
  formSubmited: boolean = false;
  contactUsFormValues: { name: string; message: string } | null = null;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.contactUsForm = this.fb.group({
      name: ['', [Validators.required]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  onSubmit() {
    if (this.contactUsForm.valid) {
      this.contactUsFormValues = this.contactUsForm.value;
      this.contactUsForm.reset();
      this.formSubmited = true;
    }
  }
}
