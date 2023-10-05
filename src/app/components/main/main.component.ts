import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{

  events: any = [
    {"id":"1","e_title":"เลือกประธาน นร.","e_status":"open"},
    {"id":"2","e_title":"คัดเลือกหัวหน้าห้อง","e_status":"close"},
    {"id":"3","e_title":"คัดเลือก....","e_status":"close"},
    {"id":"4","e_title":"คัดเลือก....","e_status":"close"},
  ]

  constructor() { }

  ngOnInit(): void {
    
  }

}
