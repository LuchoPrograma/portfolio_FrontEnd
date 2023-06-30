import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-edu-exp-edit',
  templateUrl: './edu-exp-edit.component.html',
  styleUrls: ['./edu-exp-edit.component.css']
})
export class EduExpEditComponent {
  @Output() editEducation:EventEmitter<any> = new EventEmitter
  @Output() editExperience:EventEmitter<any> = new EventEmitter

  @Input() esEduc : string ="";

  @Input() nombre:string =""
  @Input() institucion:string =""
  @Input() fechaDesde:string =""
  @Input() fechaHasta:string =""
  @Input() descripcion:string =""

  titulo:string =""
  cargo:string =""

  onEdit(){
    if(this.esEduc){
      
      this.titulo = this.nombre;

      const {titulo,institucion,descripcion,fechaDesde,fechaHasta } = this 
      const newEducation = {titulo,institucion,descripcion,fechaDesde,fechaHasta }

      console.log(newEducation)
      this.editEducation.emit(newEducation);

    }else{

      this.cargo = this.nombre;

      const {cargo,institucion,descripcion,fechaDesde,fechaHasta } = this 
      const newExperience = {cargo,institucion,descripcion,fechaDesde,fechaHasta }

      console.log(newExperience)
      this.editExperience.emit(newExperience);

    }

  }


}
