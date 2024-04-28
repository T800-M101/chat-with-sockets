import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(public wsService:WebsocketService) { }



  sendMessage(message: string): void {
    const payload = {
      from: this.wsService.getUser().name,
      message 
    }
    
    if (payload.message) {
      this.wsService.emit('message', payload);
    }
  } 

  getMessage(): Observable<string> {
    return this.wsService.listen('new-message');
  }

  getPrivateMessages(): Observable<any> {
    return this.wsService.listen('private-message');
  }
}
