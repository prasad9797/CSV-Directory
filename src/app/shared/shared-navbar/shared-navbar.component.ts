import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-shared-navbar',
  templateUrl: './shared-navbar.component.html',
  styleUrls: ['./shared-navbar.component.css'],
})
export class SharedNavbarComponent implements OnInit {
  applicationName: string = 'CVS Directory';
  constructor() {}

  ngOnInit() {}
}
