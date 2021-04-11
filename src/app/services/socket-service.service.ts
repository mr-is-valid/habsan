import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as io from 'socket.io-client';
import { environment } from '../../environments/environment';

@Injectable()
export class SocketServiceService {

  // Our socket connection
  public socket;

  constructor() { }

  connect(){
    // If you aren't familiar with environment variables then
    // you can hard code `environment.ws_url` as `http://localhost:5000`
    this.socket = io(environment.ws_url);

    console.log(this.socket);
    return this.socket.connected;
  }

}
