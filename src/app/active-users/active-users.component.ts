import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../users.service';


@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit{

  users: string[];
  // @Input() users: string[];
  // @Output() emitActiveUserId = new EventEmitter<number>();

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    console.log('ActiveUsersComponent Initialized');
    this.users = this.userService.activeUsers;
  }

  onSetToInactive(id: number) {
    this.userService.setToInactive(id);
    // this.emitActiveUserId.emit(id);
  }
}
