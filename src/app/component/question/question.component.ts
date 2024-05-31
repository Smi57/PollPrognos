import { Component,Input, OnInit } from '@angular/core';
import { Question } from '../../models/poll.model'
import { QuestionsService } from '../../services/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss'
})
export class QuestionComponent implements OnInit {

  @Input() question!: Question;
  
  constructor(private QuestionsService: QuestionsService) { }

  ngOnInit(): void {
  }
}
