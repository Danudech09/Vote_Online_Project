import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-adminadduser',
  templateUrl: './adminadduser.component.html',
  styleUrls: ['./adminadduser.component.css']
})
export class AdminadduserComponent implements OnInit{

  adduserForm = new FormGroup({
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
  get username() { return this.adduserForm.get('username'); }

  get Firstname() { return this.adduserForm.get('Firstname'); }

  get Lastname() { return this.adduserForm.get('Lastname'); }

  get age() { return this.adduserForm.get('age'); }

  get password() { return this.adduserForm.get('password'); }

  get phone() { return this.adduserForm.get('phone'); }

  gender: string[] = ['Male', 'Female', 'Other']


  @Output() commuDataChanged = new EventEmitter<boolean>();
  CommuData: boolean = false;

  onClickToGoodPassword() {
    this.CommuData = !this.CommuData;
    this.commuDataChanged.emit(this.CommuData);
  }
}
