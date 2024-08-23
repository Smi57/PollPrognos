import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './component/landing/landing.component';
import { SurveyListComponent } from './component/poll-list/poll-list.component';
import { QuestionListComponent } from './component/question-list/question-list.component';
import { QuestionComponent } from './component/question/question.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'surveys', component: SurveyListComponent },
  { path: 'surveys/:id', component: QuestionListComponent },
  { path: 'questions/:idQuest', component: QuestionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
