import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    img: new FormControl('', [Validators.required]),
    Firstname: new FormControl('', [Validators.required]),
    Lastname: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required, Validators.min(1)]),
    gender: new FormControl(''),
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/)]),
    phone: new FormControl('', [Validators.required])
  })
  constructor() { }

  ngOnInit(): void {
    
  }
  get username() { return this.registerForm.get('username'); }

  get Firstname() { return this.registerForm.get('Firstname'); }

  get Lastname() { return this.registerForm.get('Lastname'); }

  get age() { return this.registerForm.get('age'); }

  get password() { return this.registerForm.get('password'); }

  get phone() { return this.registerForm.get('phone'); }

  gender: string[] = ['Male', 'Female', 'Other']

  @Output() commuDataChanged = new EventEmitter<boolean>();
  CommuData: boolean = false;

  onClickToGoodPassword() {
    this.CommuData = !this.CommuData;
    this.commuDataChanged.emit(this.CommuData);
  }

}
