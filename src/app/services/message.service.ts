import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";

export interface Message {
  isError: boolean;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private subject: Subject<Message> = new Subject<Message>();

  constructor() { }

  pushMessage(message: Message): void {
    this.subject.next(message);
  }

  getObservable(): Observable<Message> {
    return this.subject.asObservable();
  }
}
