import { Component, OnInit } from '@angular/core';
import { Survey } from '../../models/poll.model'
import { SurveysService } from '../../services/poll.service';

@Component({
  selector: 'app-poll-list',
  templateUrl: './poll-list.component.html',
  styleUrl: './poll-list.component.scss'
})
export class SurveyListComponent implements OnInit {
  surveys!: Survey[]

  constructor(private SurveyService: SurveysService) { }

  ngOnInit(): void {
    this.surveys = this.SurveyService.surveys;
  }

}
