import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cardList = [
    {
      routerLink: "['/memories']",
      header: "Memorial",
      content1: "Visit John Smith’s memorial page",
      content2: "Share photos & videos",
    },
    {
      routerLink: "['/fundraise']",
      header: "Fundraiser",
      content1: "Share fundraiser to social media",
      content2: " Donate to support the family",
    },
    {
      routerLink: "['/zoom']",
      header: "Zoom",
      content1: "Schedule Counseling Sessions",
      content2: "Attend Funeral Service",
    },
    {
      routerLink: "['/resources']",
      header: "Mental Health",
      content1: "Learn more about grief and acceptance",
      content2: "Connect to counselors",
    }
  ];
  name = "Jane"
  constructor() { }

  ngOnInit(): void {
  }

}
