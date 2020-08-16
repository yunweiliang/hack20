import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } 
  from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

interface Note {
  name: string;
  id?: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  descriptionsCollection: AngularFirestoreCollection<Note>;
  notes: Observable<Note[]>;

  constructor(private afs: AngularFirestore) {
  }

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

  ngOnInit(): void {
    
    this.descriptionsCollection = this.afs.collection('descriptions');

    this.notes = this.descriptionsCollection.valueChanges();
    this.notes.subscribe(item => console.log(item));
  }

}
