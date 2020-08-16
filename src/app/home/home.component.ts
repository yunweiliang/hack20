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
  peopleCollection: AngularFirestoreCollection<Note>;
  notes: Observable<Note[]>;

  constructor(private afs: AngularFirestore) { 
  }

  ngOnInit(): void {
    
    this.peopleCollection = this.afs.collection('people');

    this.notes = this.peopleCollection.valueChanges();
    this.notes.subscribe(item => console.log(item));
  }

}
