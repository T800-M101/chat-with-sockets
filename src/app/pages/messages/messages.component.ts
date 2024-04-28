import { Component } from '@angular/core';
import { WebsocketService } from '../../services/websocket.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})
export class MessagesComponent {

  
  constructor(public wsService: WebsocketService){}

  exit(): void {
    this.wsService.logoutWS();
  };

}
