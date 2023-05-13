import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-education-and-experience',
  templateUrl: './education-and-experience.component.html',
  styleUrls: ['./education-and-experience.component.css']
})
export class EducationAndExperienceComponent implements OnInit {
  education:any;
  experience:any;
  editingItem:any=[];

  constructor(private portfolioData:PortfolioService,private router:Router ){
  }

  ngOnInit():void{
    this.portfolioData.getEducation().subscribe(data =>{
      this.education = data;
    });
    this.portfolioData.getExperience().subscribe(data =>{
      this.experience = data;
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
   
    this.editingItem = item;

  }

  onAddEducation(education:any){
    console.log(education)
  }

  onAddExperience(experience:any){
    console.log("Agregar!")
  }

  hasRoute(route:any){
    return this.router.url === route
  }
  
}
