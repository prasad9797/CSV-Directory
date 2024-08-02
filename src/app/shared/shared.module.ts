import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedNavbarComponent } from './shared-navbar/shared-navbar.component';
import { AppRoutingModule } from '../app.routing';

@NgModule({
  declarations: [SharedNavbarComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [SharedNavbarComponent],
})
export class SharedModule {}
