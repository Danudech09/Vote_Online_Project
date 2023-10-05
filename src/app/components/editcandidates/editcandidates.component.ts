import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editcandidates',
  templateUrl: './editcandidates.component.html',
  styleUrls: ['./editcandidates.component.css']
})
export class EditcandidatesComponent implements OnInit {
  editcandidatesForm = new FormGroup({
    img: new FormControl('', [Validators.required]),
    Firstname: new FormControl('', [Validators.required]),
    Lastname: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required, Validators.min(1)]),
    gender: new FormControl(''),
    intro: new FormControl('', [Validators.required])
  })
  constructor() { }

  ngOnInit(): void {
    
  }
  get img() { return this.editcandidatesForm.get('img'); }

  get Firstname() { return this.editcandidatesForm.get('Firstname'); }

  get Lastname() { return this.editcandidatesForm.get('Lastname'); }

  get age() { return this.editcandidatesForm.get('age'); }

  get intro() { return this.editcandidatesForm.get('intro'); }

  gender: string[] = ['Male', 'Female', 'Other']
}
