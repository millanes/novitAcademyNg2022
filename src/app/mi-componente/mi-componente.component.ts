import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mi-componente',
  templateUrl: './mi-componente.component.html',
  styleUrls: ['./mi-componente.component.css']
})
export class MiComponenteComponent implements OnInit {
  @Input() user?: any; 
  @Output() userEvent = new EventEmitter<any>();

  form!: FormGroup
  minLengthForName: number = 10

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: [this.user.name, [Validators.required, Validators.minLength(this.minLengthForName)]],
      email: [this.user.email, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      dob: [null, Validators.required],
      address: [null],
      country: [null]
    })
  }

  saveForm(form: FormGroup): void {
    alert('FORM SENT :- \n\n' + JSON.stringify(form.value, null, 4));
    this.userEvent.emit({ name: this.form.get('name')?.value, email: this.form.get('email')?.value })
  }
}
