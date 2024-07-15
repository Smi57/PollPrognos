import { Component, OnInit } from '@angular/core';
import { Survey, Question, Section } from '../../models/poll.model';
import { SurveysService, SectionsService } from '../../services/poll.service';
import { QuestionsService } from '../../services/question.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-single-poll',
  templateUrl: './single-poll.component.html',
  styleUrl: './single-poll.component.scss'
})
export class SingleSurveyComponent implements OnInit {

  survey!: Survey;
  section!: Section;
  question!: Question;
  questions: any = [] ;

  readonly APIUrl = "https://localhost:7147/api/PollPrognosApp/";
  constructor(private surveysService: SurveysService, private questionsService: QuestionsService, //private sectionsService: SectionsService,
    private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.refreshQuestions();
  }

  refreshQuestionsOld() {
    const surveyId = +this.route.snapshot.params['id'];
    this.survey = this.surveysService.getSurveyById(surveyId);
    this.questionsService.getAllQuestions$(surveyId);
    //this.questionsService.Questions;
    this.questions = this.questionsService.Questions;
    console.log("test02 :" + this.questions[0].title);
  //this.question = this.questionsSercice.getQuestionById(surveyId);
  //this.section = this.sectionsService.getSectionById(surveyId);
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
