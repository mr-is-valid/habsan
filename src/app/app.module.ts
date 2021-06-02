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
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule} from '@angular/material/select';
import { MatInputModule} from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';

//*******************REDUX MODULS********************* */
import { StoreModule} from '@ngrx/store';
import { TutorialReducer } from './reducers/tutorial.reducer';

//*******************COMPONENTS********************* */
import { DotsComponent } from './components/dots-component/dots-component.component';
import { AddDotDialogComponent } from './dialogs/add-dot-dialog/add-dot-dialog.component';
import { SwitchDialogComponent } from './dialogs/switch-dialog/switch-dialog.component';
import { EventsComponent } from './components/event/events.component';
import { SwitchComponent } from './components/switches/switchs.component';

//*******************SERVICES********************* */
import { SocketServiceService } from './services/socket-service.service';

const routes: Routes = [
  { path: 'dotsComponets', component: DotsComponent },
  { path: 'eventsComponent', component: EventsComponent},
  { path: 'switchesComponent', component: SwitchComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    DotsComponent,
    AddDotDialogComponent,
    SwitchDialogComponent,
    EventsComponent,
    SwitchComponent
  ],
  imports: [
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatSelectModule,MatInputModule,MatNativeDateModule,MatButtonModule,
    MatButtonToggleModule,MatDatepickerModule,MatFormFieldModule,MatIconModule,
    MatDialogModule,MatMenuModule,
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
  providers: [SocketServiceService],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
  entryComponents: [AddDotDialogComponent,SwitchDialogComponent]
})
export class AppModule { }
