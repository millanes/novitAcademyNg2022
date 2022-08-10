import { Component, OnInit } from '@angular/core';
import { CatService } from '../cat-service.service';

@Component({
  selector: 'app-my-pets',
  templateUrl: './my-pets.component.html',
  styleUrls: ['./my-pets.component.css'],
  providers: [CatService]
})


export class MyPetsComponent implements OnInit {

  constructor(private catService: CatService) { }

  catList:any;

  ngOnInit(): void {
    this.catService.getCats().subscribe(response => {
      console.log(response);
      this.catList = response;

    })
  }

  giveAway(nombre:string){
    this.catService.giveAway(nombre).subscribe(_ => window.alert("Se ha regalado a un gato."));
  }
}
