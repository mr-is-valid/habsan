import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../app/app.state';
import { TutorialModel } from '../app/models/tutorial.model';
import * as TutorialActions from '../app/actions/tutorial.actions';
import { HabsanApiService } from './services/habsan-api.service';
import { isNull, isNullOrUndefined } from 'util';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit{
  title = '';
  tutorials: Observable<TutorialModel[]>;

  constructor(private store: Store<AppState>, private habsanApiService:HabsanApiService) { 
    this.tutorials = this.store.select('tutorials');
  }

  ngOnInit(){
  }

  addTutorial(name, url) {
    this.store.dispatch(new TutorialActions.AddTutorial({name: name, url: url}))
  }

  replaceTutorial() {
    let myData
    this.tutorials.subscribe((res)=>{
      myData = res;
    })
    myData = this.habsanApiService.createArray(myData);
    console.log(myData);
    this.store.dispatch(new TutorialActions.ReplaceTutorial(myData));
  }

  delTutorial(index) {
    this.store.dispatch(new TutorialActions.RemoveTutorial(index))
  }

  editOne(){
    this.store.dispatch(new TutorialActions.EditOneTutorial(1,'test','http://facebook.com'));
  }

}
