import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {

  @Input() users: string[];
  @Output() emitInActiveUserId = new EventEmitter<number>();

  ngOnInit() {
    //this.users = this.userService.inactiveUsers;
  }

  onSetToActive(id: number) {
    //this.userService.setToActive(id);
    this.emitInActiveUserId.emit(id);
  }
}
