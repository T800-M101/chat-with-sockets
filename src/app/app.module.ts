import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { SocketIoModule, SocketIoConfig, Socket } from 'ngx-socket-io';

const config: SocketIoConfig = { url: environment.wsUrl, options: {} };

import { AppComponent } from './app.component';
import { environment } from './environments/environment';
import { FooterComponent } from './components/footer/footer.component';
import { ChatComponent } from './components/chat/chat.component';
import { FormsModule } from '@angular/forms';
import { UsersListComponent } from './components/users-list/users-list.component';
import { LoginComponent } from './pages/login/login.component';
import { MessagesComponent } from './pages/messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ChatComponent,
    UsersListComponent,
    LoginComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    SocketIoModule.forRoot(config)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
