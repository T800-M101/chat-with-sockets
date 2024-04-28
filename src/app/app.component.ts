import { Component, OnDestroy, OnInit } from '@angular/core';
import { WebsocketService } from './services/websocket.service';
import { ChatService } from './services/chat.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'basico';

  msgSubs$!: Subscription;

  constructor(public wsService: WebsocketService, private chatService: ChatService){}
  ngOnDestroy(): void {
    if ( this.msgSubs$) {
      this.msgSubs$.unsubscribe();
    }
  }

  ngOnInit(): void {
   this.msgSubs$ = this.chatService.getPrivateMessages().subscribe( msg => {
      console.log('PRIVATE',msg)
    });
  }




}
