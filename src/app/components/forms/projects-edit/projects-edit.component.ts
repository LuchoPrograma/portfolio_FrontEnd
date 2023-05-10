import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-projects-edit',
  templateUrl: './projects-edit.component.html',
  styleUrls: ['./projects-edit.component.css']
})
export class ProjectsEditComponent {

  @Input() projectName:string="";
  @Input() projectDescription:string="";
  @Input() projectDate:string="";
  @Input() projectURL:string="";
   
}
