import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Commentaire } from 'src/app/models/commentaire';
import { Materiel } from 'src/app/models/materiel';
import { MaterielService } from 'src/app/services/materiel.service';

@Component({
  selector: 'app-addcomment',
  templateUrl: './addcomment.component.html',
  styleUrls: ['./addcomment.component.css']
})
export class AddcommentComponent implements OnInit {

  @Input()mat:Materiel;
  com: Commentaire= {
    contenu:"",
    note: 3 ,   
    auteur: "",
    date: new Date()
  }
  constructor(private materielService:MaterielService) { }

  ngOnInit(): void {
  }
  onAjouter(f:NgForm){
    let c: Commentaire = Object.assign({}, this.com);
    c.date = new Date();
      this.materielService.ajouterCommentaire(this.mat, c);
      f.reset({note:3});
  }
  // 2ème solution
  /*
  onAjouter(f:NgForm){
    let c: Commentaire = new Commentaire;
    c.contenu = f.value["comment"];
    c.auteur = f.value["nom"];
    c.note = f.value["note"];
    c.date = new Date();
      this.materielService.ajouterCommentaire(this.mat, c);
    f.reset({note:3});
  }
  */

}
