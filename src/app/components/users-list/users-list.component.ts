import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent implements OnInit {

  activeUsersObs$!: Observable<any>;
  
  
  constructor(public chatService: ChatService){}

  ngOnInit(): void {
    this.activeUsersObs$ = this.chatService.getActiveUsers();

    // emit active users
    this.chatService.emitActiveUsers();
  }
}
