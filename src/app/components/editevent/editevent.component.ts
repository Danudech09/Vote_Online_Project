import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editevent',
  templateUrl: './editevent.component.html',
  styleUrls: ['./editevent.component.css']
})
export class EditeventComponent implements OnInit {
  editEventForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    detail: new FormControl(''),
    start: new FormControl('', [Validators.required]),
    end: new FormControl('', [Validators.required]),
  })
  constructor() { }

  get title() { return this.editEventForm.get('title'); }


  get start() { return this.editEventForm.get('start'); }

  get end() { return this.editEventForm.get('end'); }


  ngOnInit(): void {
    
  }
}
