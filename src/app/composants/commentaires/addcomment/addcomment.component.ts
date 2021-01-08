import { Component, OnInit } from '@angular/core';
import { Commentaire } from 'src/app/models/commentaire';

@Component({
  selector: 'app-addcomment',
  templateUrl: './addcomment.component.html',
  styleUrls: ['./addcomment.component.css']
})
export class AddcommentComponent implements OnInit {

  com: Commentaire= {
    contenu:"tt",
    note: 3 ,   
    auteur: "yassine",
    date: new Date()
  }
  constructor() { }

  ngOnInit(): void {
  }

}
