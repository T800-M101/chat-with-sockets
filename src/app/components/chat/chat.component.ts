import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent implements OnInit, OnDestroy {
  @ViewChild('myChat') myChat!: ElementRef;

  message!: string;

  messageSubscription!: Subscription;

  messages: any[] = [];


  constructor( public chatService: ChatService){}
 
  ngOnDestroy(): void {
    if (this.messageSubscription) {
      this.messageSubscription.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.messageSubscription = this.chatService.getMessage().subscribe( msj => {
      this.messages.push(msj);
      setTimeout(() => {
          this.myChat.nativeElement.scrollTop = this.myChat.nativeElement.scrollHeight;
      }, 50);
    })
  }



  sendMessage(): void {
    this.chatService.sendMessage(this.message);
    this.message = '';
  }



}
