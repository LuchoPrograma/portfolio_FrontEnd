import { Component } from '@angular/core';
import { faAdd,faPen,faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  faPen = faPen;
  faAdd = faAdd;
  faTrash = faTrash;
}
