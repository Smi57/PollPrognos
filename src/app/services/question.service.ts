import { Injectable } from '@angular/core';
import { Question } from '../models/poll.model'

@Injectable({
  providedIn: 'root'
})

export class QuestionsService {
  questions: Question[] = [
    {
      id: 1,
      title: 'Orval',
      imgUrl: 'https://th.bing.com/th/id/R.b3af3c92d96c88b840f81e60f276b317?rik=GgrmVIBCzJkhWA&riu=http%3a%2f%2fstatic1.squarespace.com%2fstatic%2f552ca39be4b0d22c750da562%2ft%2f61844e0a0fac8669df1467b0%2f1636060689882%2fOrval%2bTitle.png%3fformat%3d1500w&ehk=jisxe0THIn7KN6IZ0HWuA45fvJD9E%2frx6%2b6nn2QkLPE%3d&risl=&pid=ImgRaw&r=0'
    },
    {
      id: 2,
      title: 'Chimay',
      imgUrl: 'https://th.bing.com/th/id/OIP.-pIbfRbDBW7x5tKxBsx7qQHaEH?rs=1&pid=ImgDetMain'
    },
    {
      id: 3,
      title: 'Rochefort',
      imgUrl: 'https://s3.amazonaws.com/beertourprod/breweries/share_pictures/000/000/018/original/trappist-rochefort-3_1024x681.jpg?1510222496'
    }
  ]
  getAllQuestions(): Question[] {
    return this.questions;
  }

  getQuestionById(questionId: number): Question {
    const question = this.questions.find(question => question.id === questionId);
    if (!question) {
      throw new Error('section not found!');
    } else {
      return question;
    }
  }
}
