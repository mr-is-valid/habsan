import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HabsanApiService {

  constructor(private httpClient: HttpClient) { }

  private url = 'http://localhost:3000';

  getData(){
    return this.httpClient.get(this.url);
  }

  getSwitchData(){
    return this.httpClient.get(this.url + "/SwitchController/getAllSwitchData");
  }

  
  getSwitchTypeData(){
    return this.httpClient.get(this.url + "/SwitchTypeController/getAllSwitchTypeData");
  }

  getFloorData(){
    return this.httpClient.get(this.url + "/FloorController/getAllFloorData");
  }

  getSystemData(){
    return this.httpClient.get(this.url + "/SystemController/getAllSystemData");
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
