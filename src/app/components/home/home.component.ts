import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public active:any;
  public onNavChange:any;
  constructor() { }

  ngOnInit(): void {
  }

}
