import { Component } from '@angular/core';
import { faPen, faAdd, faTrash} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-education-and-experience',
  templateUrl: './education-and-experience.component.html',
  styleUrls: ['./education-and-experience.component.css']
})
export class EducationAndExperienceComponent {
  faPen = faPen;
  faAdd = faAdd;
  faTrash = faTrash;
}
