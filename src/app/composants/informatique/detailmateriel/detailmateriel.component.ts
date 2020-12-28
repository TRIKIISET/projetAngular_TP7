import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Materiel } from 'src/app/models/materiel';
import { MaterielService } from 'src/app/services/materiel.service';

@Component({
  selector: 'app-detailmateriel',
  templateUrl: './detailmateriel.component.html',
  styleUrls: ['./detailmateriel.component.css']
})
export class DetailmaterielComponent implements OnInit {

  afficher:boolean =false;
  materiel:Materiel ;
/*
onClick(){
  this.afficher = !this.afficher;
}*/
  constructor(private materielService:MaterielService,
    private activatedRoute:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    let identifiant = this.activatedRoute.snapshot.params['fedi'];
    this.materiel = this.materielService.getMaterielById(identifiant);
  }

  onRetour(){
      this.router.navigate(['/informatique']);
  }

}
