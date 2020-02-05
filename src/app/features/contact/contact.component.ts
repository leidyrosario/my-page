import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import  { Observable } from  'rxjs';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: []
})
export class ContactComponent  {
  itemName = "";
  itemEmail = "";
  itemMessage = "";
  items: Observable<any>;
  registerForm: FormGroup;
  submitted = false;
  showMessage= false;
  

  constructor(private fb: FormBuilder, private afDb: AngularFireDatabase) {
    this.items = afDb.list('messages').valueChanges()
    this.createForm();
  }
  createForm() {
    this.registerForm = this.fb.group({
      name: ['', Validators.required,  Validators.minLength(3)],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    console.log('submit');
    const {name, email, message} = this.registerForm.value;
    const date = Date();
    const formRequest = { name, email, message, date };
    this.afDb.list('/messages').push(formRequest);
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        } 
  }

  showHideMessage() {
    this.showMessage = this.showMessage ? false : true;
 }

  clearForm() {
    this.registerForm.reset();
   }
}
