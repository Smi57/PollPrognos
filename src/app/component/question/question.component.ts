import { Component, Input, OnInit } from '@angular/core';
import { Question } from '../../models/poll.model';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { QuestionsService } from '../../services/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss'
})

export class QuestionComponent implements OnInit {

  @Input() question!: Question;
  propositionDatas: any = [];

  readonly APIUrl = "https://localhost:7147/api/PollPrognosApp/";
  constructor(private route: ActivatedRoute,
    private http: HttpClient,
    private questionsService: QuestionsService
   ) { }

  ngOnInit() {
    this.refreshPropositionDatas();
  }

  refreshPropositionDatas() {
    //const QuestId = +this.route.snapshot.params['idQuest'];
    const QuestId = this.question.id;
    console.log("test01 :" + QuestId)
    this.http.get(this.APIUrl + 'GetPropositionData?id=' + QuestId).subscribe(async data => {
      this.propositionDatas = data;
      console.log("test03 :" + this.propositionDatas[1].Val01)
    })
  }

}
