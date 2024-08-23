import { Component, Input, OnInit } from '@angular/core';
import { Survey, Question, Section } from '../../models/poll.model';
import { SurveysService } from '../../services/poll.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrl: './question-list.component.scss'
})
export class QuestionListComponent implements OnInit {

  survey!: Survey;
  section!: Section;
  questions: any = [] ;

  readonly APIUrl = "https://localhost:7147/api/PollPrognosApp/";
  constructor(private surveysService: SurveysService,
    private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.refreshQuestions();
  }

  refreshQuestions() {
    const surveyId = +this.route.snapshot.params['id'];
    this.survey = this.surveysService.getSurveyById(surveyId);
    this.http.get(this.APIUrl + 'GetQuestion?id=' + surveyId).subscribe(async data => {
          this.questions = data;
        console.log("test02 :" + this.questions[1].title)
      })
    }


}
