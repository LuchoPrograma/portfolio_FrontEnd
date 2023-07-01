import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-projects-add',
  templateUrl: './projects-add.component.html',
  styleUrls: ['./projects-add.component.css']
})
export class ProjectsAddComponent {
  @Output() addProject = new EventEmitter;

  @Input() nombre:string="";
  @Input() descripcion:string="";
  @Input() urlProyecto:string="";
  @Input() fecha:string="";

  onAdd(){

    const {nombre, descripcion, urlProyecto, fecha} = this 
    const newProject = {nombre, descripcion, urlProyecto, fecha}

    this.addProject.emit(newProject);

  }


}
