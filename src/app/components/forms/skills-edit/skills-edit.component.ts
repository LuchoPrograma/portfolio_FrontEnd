import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skills-edit',
  templateUrl: './skills-edit.component.html',
  styleUrls: ['./skills-edit.component.css']
})
export class SkillsEditComponent {

  @Input() skillName:string="";
  @Input() porcentaje:string="";


}
