import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-mi-componente',
  templateUrl: './mi-componente.component.html',
  styleUrls: ['./mi-componente.component.css']
})
export class MiComponenteComponent implements OnInit {

  @Output() userEvent = new EventEmitter<any>();
  form!: FormGroup
  minLengthForName: number = 3

  constructor(private readonly fb: FormBuilder, 
    private loginService: LoginService,
    private storage: StorageService) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(this.minLengthForName)]],
      password: ['', [Validators.required, Validators.pattern("^[a-z0-9]+")]],
    })
  }

  saveForm(form: FormGroup): void {
    //alert('FORM SENT :- \n\n' + JSON.stringify(form.value, null, 4));
    this.loginService.login({nombreUsuario:this.form.get('name')?.value, contraseña: this.form.get('password')?.value }).subscribe(response => 
      {
        this.storage.setToken(response)
        this.userEvent.emit(response)
      }
      )
  }
}
