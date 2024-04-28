import { Component, OnInit } from '@angular/core';
import { WebsocketService } from './services/websocket.service';
import { ChatService } from './services/chat.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'basico';

  constructor(public wsService: WebsocketService, private chatService: ChatService){}

  ngOnInit(): void {
    this.chatService.getPrivateMessages().subscribe( msg => {
      console.log('PRIVATE',msg)
    });
  }




}
