import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-serch',
  templateUrl: './serch.component.html'
})
export class SerchComponent implements OnInit {
  
  heroes:any[] = []
  termino:string;

  constructor( private activatedReoute:ActivatedRoute,
               private _heroesService:HeroesService) {
   }

  ngOnInit() {

    this.activatedReoute.params.subscribe(params => {
      this.termino = params['termino'];
      this.heroes = this._heroesService.buscarHeroes( params ['termino']);
      console.log(this.heroes);
    });

  }
  

}
