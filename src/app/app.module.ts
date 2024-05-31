import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './component/app.component';
import { LandingComponent } from './component/landing/landing.component';
import { SurveyComponent } from './component/poll/poll.component';
import { SurveyListComponent } from './component/poll-list/poll-list.component';
import { SingleSurveyComponent } from './component/single-poll/single-poll.component';
import { QuestionComponent } from './component/question/question.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    SurveyComponent,
    SurveyListComponent,
    SingleSurveyComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
