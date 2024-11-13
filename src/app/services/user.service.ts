import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private valeurSource = new BehaviorSubject<string>('');
  valeur$ = this.valeurSource.asObservable();

  private login!: string;

  setUserId(login: string) {
    //this.login = login;
    this.valeurSource.next(login);
  }

  getUserId(): string {
    return this.login;
  }
}
