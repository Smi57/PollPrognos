import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './component/app.component';
import { LandingComponent } from './component/landing/landing.component';
import { SurveyComponent } from './component/poll/poll.component';
import { SurveyListComponent } from './component/poll-list/poll-list.component';
import { QuestionListComponent } from './component/question-list/question-list.component';
import { QuestionComponent } from './component/question/question.component';
import { HttpClientModule } from '@angular/common/http';
import { SummaryComponent } from './component/summary/summary.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    SurveyComponent,
    SurveyListComponent,
    QuestionListComponent,
    QuestionComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
