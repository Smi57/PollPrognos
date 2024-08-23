import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'


@Injectable({
  providedIn: 'root'
})

export class PropositionDatasService implements OnInit {

  PropostionDatasVar: any = [];
  PropostionDatas: any = [];

  readonly APIUrl = "https://localhost:7147/api/PollPrognosApp/";

  constructor(private http: HttpClient, private route: ActivatedRoute) {
  }

  ngOnInit() {
    console.log("test03")
    //this.getAllQuestions();
  }

  getAllQuestions$(pQuestionInit: number) {//: any {
    //const pollId = +this.route.snapshot.params['id'];
    this.http.get(this.APIUrl + 'GetPropositionData?id=' + pQuestionInit).subscribe(async data => {
      this.PropostionDatasVar= data;
      this.PropostionDatas = this.PropostionDatasVar;
      //this.Question = this.Questions[0];
      console.log("test04 :" + this.PropostionDatas[0].val01);
      this.PropostionDatas = this.PropostionDatasVar;
      console.log("test05 :" + this.PropostionDatas[0].val02);
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
