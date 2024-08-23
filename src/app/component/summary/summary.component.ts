import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionsService } from '../../services/question.service';
import { HttpClient } from '@angular/common/http';
import { Question } from '../../models/poll.model';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss'
})

export class SummaryComponent implements OnInit {

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
