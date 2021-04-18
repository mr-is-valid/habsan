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
    // this.socket = io(environment.ws_url);

    // console.log(this.socket);
    // return this.socket.connected;
    return true;
  }

}
