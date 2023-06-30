import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-skills-add',
  templateUrl: './skills-add.component.html',
  styleUrls: ['./skills-add.component.css']
})
export class SkillsAddComponent {
  @Output() addSkill = new EventEmitter;

  @Input() habilidad:string = "";
  @Input() porcentaje:string = "";

  onAdd(){
    const {habilidad, porcentaje} = this 
    const newSkill = {habilidad, porcentaje}

    this.addSkill.emit(newSkill);
  }
}
