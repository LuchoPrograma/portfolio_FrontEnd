import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-edu-exp-edit',
  templateUrl: './edu-exp-edit.component.html',
  styleUrls: ['./edu-exp-edit.component.css']
})
export class EduExpEditComponent {
  
  @Input() esEduc : string ="";

  @Input() nombre:string =""
  @Input() institucion:string =""
  @Input() fechaDesde:string =""
  @Input() fechaHasta:string =""
  @Input() descripcion:string =""


}
