import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
// tslint:disable-next-line:import-spacing
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';

interface User {
  name: string;
  email: string;
  message: string;
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


  constructor(private afDb: AngularFireDatabase) {
  }

  onSubmit(form: NgForm) {
    const {name, email, message} = form.value;
    const date = Date();
    this.showHideMessage();
    const formRequest = { name, email, message, date };
    this.afDb.list('/messages').push(formRequest);
  }


  showHideMessage() {
    this.showMessage = !this.showMessage;
 }

}

