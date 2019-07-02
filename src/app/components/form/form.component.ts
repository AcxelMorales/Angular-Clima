import { Component } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';

import { ClimaService } from 'src/app/services/clima.service';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styles: []
})
export class FormComponent {

  form: FormGroup;
  clima: any[] = [];
  mostrar: boolean = false;

  constructor(
    private _climaService: ClimaService
  ) {
    this.form = new FormGroup({
      ciudad: new FormControl(null, Validators.required),
      pais: new FormControl(null, Validators.required)
    });
  }

  public getData(form: NgForm): void {
    if (form.invalid) return;

    this._climaService.getDataAPI(this.form.value.ciudad, this.form.value.pais)
      .subscribe(
        (resp: any) => {
          this.clima = resp;
          this.mostrar = true;
        },
        err => {
          Swal.fire({
            type: "error",
            title: 'Error',
            text: err.error.message
          });
        }
      );
  }

}
