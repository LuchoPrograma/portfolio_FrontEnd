import { Component,OnInit } from '@angular/core';
import { faPen, faAdd, faTrash} from '@fortawesome/free-solid-svg-icons';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-education-and-experience',
  templateUrl: './education-and-experience.component.html',
  styleUrls: ['./education-and-experience.component.css']
})
export class EducationAndExperienceComponent {
  education:any;
  experience:any;

  faPen = faPen;
  faAdd = faAdd;
  faTrash = faTrash;

  constructor(private portfolioData:PortfolioService ){
  }

  ngOnInit():void{
    this.portfolioData.obtenerDatos().subscribe(data =>{
      this.education = data.educacion;
      this.experience = data.experiencia;
    });
  }

  onDelete(item:any){
    console.log("Borrar!")
  }

  onEdit(item:any){
    console.log("A editar!")
  }

  onAddEducation(education:any){
    console.log("Agregar!")
  }

  onAddExperience(experience:any){
    console.log("Agregar!")
  }
  
}
