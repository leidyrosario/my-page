import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
// tslint:disable-next-line:import-spacing
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: []
})
export class ContactComponent  {
  showMessage = false;
  user: User;
  users = [];


  constructor(private afDb: AngularFireDatabase) {
  }

  add(form: NgForm) {
    this.users.push(form.value);
    form.reset();
  }

  onSubmit() {
    /*const {name, email, message} = this.registerForm.value;
    const date = Date();
    const formRequest = { name, email, message, date };
    this.afDb.list('/messages').push(formRequest);
        // stop here if form is invalid
    if (this.registerForm.invalid) {
            return;
        }*/
  }


  showHideMessage() {
    this.showMessage = this.showMessage ? false : true;
 }


}

interface User {
  label: string;
  email: string;
  message: string;
}
