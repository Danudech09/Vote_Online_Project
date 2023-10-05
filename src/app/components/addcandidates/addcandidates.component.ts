import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addcandidates',
  templateUrl: './addcandidates.component.html',
  styleUrls: ['./addcandidates.component.css']
})
export class AddcandidatesComponent implements OnInit {
  addcandidatesForm = new FormGroup({
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
  get img() { return this.addcandidatesForm.get('img'); }

  get Firstname() { return this.addcandidatesForm.get('Firstname'); }

  get Lastname() { return this.addcandidatesForm.get('Lastname'); }

  get age() { return this.addcandidatesForm.get('age'); }

  get intro() { return this.addcandidatesForm.get('intro'); }

  gender: string[] = ['Male', 'Female', 'Other']
}
