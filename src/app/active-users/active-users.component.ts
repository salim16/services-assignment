import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {

  @Input() users: string[];
  @Output() emitActiveUserId = new EventEmitter<number>();


  onSetToInactive(id: number) {
    // this.userService.setToInactive(id);
    this.emitActiveUserId.emit(id);
  }
}
