import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-edit-uesr',
  templateUrl: './admin-edit-uesr.component.html',
  styleUrls: ['./admin-edit-uesr.component.css']
})
export class AdminEditUesrComponent {
  edituserForm = new FormGroup({
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
  get username() { return this.edituserForm.get('username'); }

  get Firstname() { return this.edituserForm.get('Firstname'); }

  get Lastname() { return this.edituserForm.get('Lastname'); }

  get age() { return this.edituserForm.get('age'); }

  get password() { return this.edituserForm.get('password'); }

  get phone() { return this.edituserForm.get('phone'); }

  gender: string[] = ['Male', 'Female', 'Other']

  @Output() commuDataChanged = new EventEmitter<boolean>();
  CommuData: boolean = false;

  onClickToGoodPassword() {
    this.CommuData = !this.CommuData;
    this.commuDataChanged.emit(this.CommuData);
  }

}
