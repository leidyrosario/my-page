import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';

interface User {
  name: string;
  email: string;
  message: string;
}

export interface Message {
  msg?: string;
  name?: string;
  email?: string;
  message?: string;
  date?: any;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: []
})
export class ContactComponent  {
  showMessage = false;
  user: User;
  users: User[] = [];
  messages$: Observable<Message[]>;
  messages: Message[];
  sub: any;


  constructor(private afs: AngularFirestore) {
    this.messages$ = this.afs.collection<Message>('messages').valueChanges();

    this.sub = this.afs.collection<Message>('messages').valueChanges()
    .subscribe(res => this.messages = res);

  }

  onSubmit(form: NgForm) {
    const {name, email, message} = form.value;
    const date = Date();
    this.showHideMessage();
    const formRequest = { name, email, message, date };

    this.afs.collection<Message>('messages').add(formRequest);

  }


  showHideMessage() {
    this.showMessage = !this.showMessage;
 }

}

