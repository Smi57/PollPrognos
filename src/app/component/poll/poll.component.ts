import { Component, Input, OnInit } from '@angular/core';
import { Survey } from '../../models/poll.model'
import { SurveysService } from '../../services/poll.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrl: './poll.component.scss'
})
export class SurveyComponent implements OnInit {

  @Input() survey!: Survey;

  constructor(private SurveysService: SurveysService,
    private router: Router) { }

  ngOnInit() {

  }

  onViewSurvey() {
    this.router.navigateByUrl(`surveys/${this.survey.id}`);
  }
}
