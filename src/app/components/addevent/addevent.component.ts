import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addevent',
  templateUrl: './addevent.component.html',
  styleUrls: ['./addevent.component.css']
})
export class AddeventComponent implements OnInit{
  addEventForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    detail: new FormControl(''),
    start: new FormControl('', [Validators.required]),
    end: new FormControl('', [Validators.required]),
  })
  constructor() { }

  get title() { return this.addEventForm.get('title'); }


  get start() { return this.addEventForm.get('start'); }

  get end() { return this.addEventForm.get('end'); }


  ngOnInit(): void {
    
  }
}
