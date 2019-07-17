import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {

  users: string[];
  // @Input() users: string[];
  @Output() emitInActiveUserId = new EventEmitter<number>();

  constructor(private userService: UserService) {}

  ngOnInit() {
    console.log('InactiveUsersComponent Initialized');
    this.users = this.userService.inactiveUsers;
  }

  onSetToActive(id: number) {
    this.userService.setToActive(id);
    // this.emitInActiveUserId.emit(id);
  }
}
