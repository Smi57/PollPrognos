import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './component/landing/landing.component';
import { SurveyListComponent } from './component/poll-list/poll-list.component';
import { SingleSurveyComponent } from './component/single-poll/single-poll.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'surveys', component: SurveyListComponent },
  { path: 'surveys/:id', component: SingleSurveyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
