import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styles: []
})
export class ResultadoComponent {

  kelvin: number = 273.15;
  @Input() data: any;

}
