import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactUsComponent } from './contact-us.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [CommonModule, SharedModule, ReactiveFormsModule],
  declarations: [ContactUsComponent],
  exports: [ContactUsComponent],
})
export class ContactUsModule {}
