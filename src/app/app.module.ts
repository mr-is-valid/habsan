//*******************USEFULL MODULE********************* */
import { AppComponent } from "./app.component";
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { NgModule,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NoopAnimationsModule ,BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms'; 
import { RoundProgressModule } from 'angular-svg-round-progressbar';

//*******************MATERIALS MODULS********************* */
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule} from '@angular/material/select';
import { MatInputModule} from '@angular/material/input';

//*******************REDUX MODULS********************* */
import { StoreModule} from '@ngrx/store';
import { TutorialReducer } from './reducers/tutorial.reducer';

//*******************COMPONENTS********************* */
import { DotsComponentComponent } from './components/dots-component/dots-component.component';

const routes: Routes = [
  { path: 'dotsComponets', component: DotsComponentComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    DotsComponentComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatSelectModule,MatInputModule,MatNativeDateModule,MatButtonModule,
    MatButtonToggleModule,MatDatepickerModule,MatFormFieldModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RoundProgressModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({
      tutorials:TutorialReducer,
    }),
    MDBBootstrapModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
