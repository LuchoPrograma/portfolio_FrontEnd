import { Component,OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-education-and-experience',
  templateUrl: './education-and-experience.component.html',
  styleUrls: ['./education-and-experience.component.css']
})
export class EducationAndExperienceComponent implements OnInit {
  education:any;
  experience:any;

  constructor(private portfolioData:PortfolioService ){
  }

  ngOnInit():void{
    this.portfolioData.getEducation().subscribe(data =>{
      this.education = data;
      //this.experience = data.experiencia;
    });
    this.portfolioData.getExperience().subscribe(data =>{
      this.experience = data;
      //this.experience = data.experiencia;
    });
  }

  onDeleteEducation(item:any){
    console.log("Borrar!")
    this.portfolioData.deleteEducation(item).subscribe(() => (this.education = this.education.filter((t: { id: any; }) => t.id !== item.id) ))
  }
  onDeleteExperience(item:any){
    console.log("Borrar!")
    this.portfolioData.deleteExperience(item).subscribe(() => (this.experience = this.experience.filter((t: { id: any; }) => t.id !== item.id) ))
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
