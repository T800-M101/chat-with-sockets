import { Component } from '@angular/core';
import { WebsocketService } from '../../services/websocket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  name: string = '';

  constructor(private wsService: WebsocketService, private router: Router){}


  login(): void {
      this.wsService.loginWS(this.name).then( () => {
        this.name = '';
        this.router.navigate(['messages']);
      });
  }
}
