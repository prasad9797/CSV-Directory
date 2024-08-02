import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { AppRoutingModule } from './app.routing';
import { ContactUsModule } from './pages/contact-us/contact-us.module';
import { AboutModule } from './pages/about/about.module';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    DashboardModule,
    ContactUsModule,
    AboutModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
