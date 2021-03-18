import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HabsanApiService {

  constructor(private httpClient: HttpClient) { }

  private url = 'my server url';

  getData(){
    return this.httpClient.get(this.url);
  }
  
  createArray(array){
    console.log(array);
    let item  = {
      name : 'test',
      url: 'test'
    }
    return [...array,item];
    //return this.httpClient.post(this.url, JSON.stringify(post));
  }

}
