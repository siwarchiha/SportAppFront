import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { MustMatch } from './_helpers/must-match.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor( private formbuilder:FormBuilder) { }
  signupForm : FormGroup;
  Actualdate:any;
  ngOnInit() {
    this.Actualdate = new Date();
    this.signupForm=this.formbuilder.group({
      firstName: ["",[Validators.required,Validators.minLength(3)]],
      lastName: ["",[Validators.required,Validators.minLength(3)]],
      email: ["",[Validators.required,Validators.email]],
      pwd: ["",[Validators.required,Validators.minLength(6),Validators.maxLength(12)]],
      confirmPwd: ["",Validators.required] /*},
      {
        validator: MustMatch('password', 'confirmPassword')*/
      

    });
  }
  signup(){
    console.log('Here object : ',this.signupForm.value);
  }

}



