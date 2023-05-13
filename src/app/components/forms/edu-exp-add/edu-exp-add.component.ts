import { Component,EventEmitter,Input, Output } from '@angular/core';

@Component({
  selector: 'app-edu-exp-add',
  templateUrl: './edu-exp-add.component.html',
  styleUrls: ['./edu-exp-add.component.css']
})
export class EduExpAddComponent {
  @Output() addEducation = new EventEmitter;
  @Output() addExperience = new EventEmitter;

  @Input() esEduc : boolean = false;

  @Input() nombre:string =""
  @Input() institucion:string =""
  @Input() fechaDesde:string =""
  @Input() fechaHasta:string =""
  @Input() descripcion:string =""

  titulo:string ="HOLA"
  cargo:string =""

  onAdd(){
    if(this.esEduc){
      console.log("agregando educacion")
      console.log(this.nombre)
      this.titulo = this.nombre;

      const {titulo,institucion,descripcion,fechaDesde,fechaHasta } = this 
      const newEducation = {titulo,institucion,descripcion,fechaDesde,fechaHasta }

      this.addEducation.emit(newEducation);

    }else{
      this.cargo = this.nombre;

      const {cargo,institucion,descripcion,fechaDesde,fechaHasta } = this 
      const newExperience = {cargo,institucion,descripcion,fechaDesde,fechaHasta }

      this.addExperience.emit(newExperience);

    }

  }

}
