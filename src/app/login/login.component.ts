import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {MessageService} from "../services/message.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
  }

  login(value: string): void {
    if (this.authService.login(value)) {
      this.router.navigate(['']);
    } else {
      this.messageService.pushMessage({
        isError: true,
        message: 'Sie konnten nicht angemeldet werden'
      });
    }
  }
}
