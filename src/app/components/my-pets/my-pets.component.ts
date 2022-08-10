import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CatService } from '../../services/cat-service.service';

@Component({
  selector: 'app-my-pets',
  templateUrl: './my-pets.component.html',
  styleUrls: ['./my-pets.component.css'],
  providers: [CatService]
})


export class MyPetsComponent implements OnInit {

  formValuesAdd: FormGroup;
  formValuesEdit: FormGroup;
  
  constructor(fb: FormBuilder,
    private catService: CatService
    ) { 
      this.formValuesAdd = fb.group({
        nombre: ['', Validators.required],
        raza: ['', Validators.required],
        nacimiento: ['', Validators.required],
        idGato: [0, Validators.required]
      });
      this.formValuesEdit = fb.group({
        nombre: ['', Validators.required],
        idGato: [0, Validators.required]
      });
    }

  catList:any[] = [];
  isEditing: boolean = false;
  nombreActual: string = '';

  ngOnInit(): void {
    this.catService.getCats().subscribe((response: any[]) => {
      console.log(response);
      this.catList = response;

    })
  }

  giveAway(idGato: number, nombre:string){
    this.catService.giveAway(nombre).subscribe(response => {
      window.alert(response);
      this.catList = this.catList.filter(x=> x.idGato != idGato);
    });
  }

  edit(idGato: number) {
    console.log('Edito el gato con Id', idGato);

    //Marco que estoy editando
    this.isEditing = true;

    //Busco el gato a editar
    let cat = this.catList.find((c: any) => c.idGato === idGato);

    //Lleno los controles con los datos del gato encontrado
    
    this.formValuesEdit.controls['idGato'].setValue(idGato);
    this.formValuesEdit.controls['nombre'].setValue(cat.nombre);
    this.nombreActual = cat.nombre;
  }

  cancelEdit() {
    this.isEditing = false;
    this.nombreActual = '';
    this.formValuesEdit.reset();
  }

  submit() {
  //   if (this.formValues.status === 'VALID') {
  //     let aCat = new Cat();

  //     aCat.nombre = this.formValues.get('nombre')?.value;
  //     aCat.idGato = this.formValues.get('idGato')?.value;
  //     aCat.raza = this.formValues.get('raza')?.value;
  //     aCat.edad = this.formValues.get('edad')?.value;

  //     if (aCat.idGato != 0)
  //     {
  //       this.catService.updateCat(aCat).subscribe({
  //         next: _ => {
  //           // let cat = this.catList.find((c: any) => c.idGato === aCat.idGato);
  //           // cat.nombre = aCat.nombre;
  //           // cat.edad = aCat.edad;
  //           // cat.raza = aCat.raza;
  //           this.getAllCats();
  //         },
  //         error: error => {
  //           if (error.status === 401){
  //             window.alert('Error de autenticación con el servidor.');
  //           }
  //           else if (error.status === 400)
  //           {
  //             window.alert('Error de parametros incorrectos.');
  //           }
  //           else
  //             window.alert('Error desconocido.');
  //         }
  //       });
  //     }
  //     else{
  //       this.catList.push(
  //         {
  //         nombre: this.formValues.get('nombre')?.value,
  //         edad: this.formValues.get('edad')?.value,
  //         raza: this.formValues.get('raza')?.value
  //       });
  //     }

  //     this.isEditing = false;
  //     this.formValues.reset({});

  //   } else
  //     window.alert('Debe completar todos los campos');
  }

  adoptCat(){
    this.catService.adoptCat({
      nombre: this.formValuesAdd.get('nombre')?.value,
      nacimiento: this.formValuesAdd.get('nacimiento')?.value,
      raza: this.formValuesAdd.get('raza')?.value
    }).subscribe((response: any) => this.catList.push(response))
  }

  renameCat(){
    let nombreNuevo = this.formValuesEdit.get('nombre')?.value;
    let idGato = this.formValuesEdit.get('idGato')?.value;
    this.catService.updateCat(nombreNuevo, this.nombreActual).subscribe(response => {

      let cat = this.catList.find((c: any) => c.idGato === idGato)
      cat.nombre = nombreNuevo
      this.nombreActual = nombreNuevo
    });
              
  }
}
