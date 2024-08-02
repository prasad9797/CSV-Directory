import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../shared/interfaces/user';

@Component({
  selector: 'app-individual-user',
  templateUrl: './individual-user.component.html',
  styleUrls: ['./individual-user.component.css'],
})
export class IndividualUserComponent implements OnInit {
  @Input() user!: User;

  constructor() {}

  ngOnInit() {}
}
