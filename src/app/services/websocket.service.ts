import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  public socketStatus = false;

  private _user!: User | null;

  constructor(private socket: Socket, private router: Router) {
    this.loadStorage();
    this.checkstatus();
   }

// Check server status
  checkstatus() {
    this.socket.on('connect', () => {
      console.log('Connected to server!');
      this.socketStatus = true;
      this.loadStorage();
    });

    this.socket.on('disconnect', () => {
      console.log('Disconnected from server!');
      this.socketStatus = false;
    });
  }

  // emit('EVENT', payload?, callback?)
  emit( event: string, payload?:any, callback?: Function) {
    this.socket.emit( event, payload, callback);
  }


  // Listen server events
  listen(event: string): any {
    return this.socket.fromEvent( event);
  }

  // Login WS
  loginWS(name: string): Promise<void> {
    return new Promise( (resolve, reject) => {
      if(name.trim().length === 0) return;
      this.emit( 'configure-user', { name }, (resp: any) => {
        if(resp) {
          this._user = new User(name);
          this.storageUser();
          resolve();
        } else {
          reject();
        }
      });
    })
  }

  logoutWS(): void {
    this._user = null;
    localStorage.removeItem('user');

    const payload = {
      name: 'anonymous'
    }

    this.emit('configure-user', payload, () => {});
    this.router.navigate(['login']);

  }

  // Get user
  getUser(): User | null {
    return this._user;
  }

  // store local storage
  storageUser(): void {
    localStorage.setItem('user', JSON.stringify(this._user));
  }

  // load local storage
  loadStorage(): void {
    if ( localStorage.getItem('user') ) {
      this._user =  JSON.parse(localStorage.getItem('user')!);
      if (this._user) {
        this.loginWS(this._user.name);
      }
    }
  }
}
