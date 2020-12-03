import { Component, OnInit } from '@angular/core';
import {MessageService} from "../services/message.service";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  message = '';
  isError = false;
  isHidden = true;

  constructor(
    private messageService: MessageService
  ) {
    this.messageService.getObservable().subscribe(message => {
      this.isHidden = false;
      this.message = message.message;
      this.isError = message.isError;

      if (! this.isError) {
        setTimeout(() => {
          this.isHidden = true;
        }, 3000);
      }
    });
  }

  ngOnInit(): void {
  }

}
