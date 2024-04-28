import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { WebsocketService } from '../services/websocket.service';


export const UserGuardService: CanActivateFn = () => {

  const wsService = inject(WebsocketService);
  const router = inject(Router);
  
  
    if (wsService.getUser()) {
      return true;
    } else {
      router.navigate(['login']);
      return false;
    }
  
}
