import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../../shared/shared.module';
import { IndividualUserComponent } from './individual-user/individual-user.component';

@NgModule({
  declarations: [DashboardComponent, IndividualUserComponent],
  imports: [CommonModule, SharedModule],
  exports: [DashboardComponent],
})
export class DashboardModule {}
