import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Question } from '../models/poll.model';


@Injectable({
  providedIn: 'root'
})

export class QuestionsService implements OnInit {

  QuestionsVar: any = [];
  Questions: any = [];

  readonly APIUrl = "https://localhost:7147/api/PollPrognosApp/";

  constructor(private http: HttpClient, private route: ActivatedRoute) {
  }

  ngOnInit() {
    console.log("test03")
    //this.getAllQuestions();
  }

  getAllQuestions$(pPollInit: number) {//: any {
    //const pollId = +this.route.snapshot.params['id'];
    this.http.get(this.APIUrl + 'GetQuestion?id=' + pPollInit).subscribe(async data => {
      this.QuestionsVar = data;
      this.Questions = this.QuestionsVar;
      //this.Question = this.Questions[0];
      console.log("test04 :" + this.Questions[0].title);
      this.Questions = this.QuestionsVar;
      console.log("test05 :" + this.Questions[0].title);
      //return this.Question;
    })
  }

  //getQuestionById(questionId: number): Question {
  //  const question = this.questions.find(question => question.id === questionId);
  //  if (!question) {
  //    throw new Error('section not found!');
  //  } else {
  //    return question;
  //  }
  //}
}
