import { Component,OnInit } from '@angular/core';
import { faAdd,faPen,faTrash } from '@fortawesome/free-solid-svg-icons';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-hard-soft-skills',
  templateUrl: './hard-soft-skills.component.html',
  styleUrls: ['./hard-soft-skills.component.css']
})
export class HardSoftSkillsComponent {
  skills:any;

  faPen = faPen;
  faAdd = faAdd;
  faTrash = faTrash;

  constructor(private portfolioData:PortfolioService){
  }

  ngOnInit():void{
    this.portfolioData.obtenerDatos().subscribe(data => {
      this.skills = data.habilidades;
      console.log(this.skills)
    })
  }

}
