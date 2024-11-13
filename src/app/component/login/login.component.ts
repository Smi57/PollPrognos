import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/poll.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  loginTbx!: string;
  usr!: User;
  constructor(private router: Router, private userSerice: UserService) { }

  ngOnInit(): void {
  }

  onLogin() {
    this.userSerice.setUserId(this.loginTbx)
    //console.log(this.loginTbx);
    this.router.navigateByUrl('surveys');
  }

}
