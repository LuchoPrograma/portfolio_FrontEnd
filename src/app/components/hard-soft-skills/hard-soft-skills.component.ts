import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-hard-soft-skills',
  templateUrl: './hard-soft-skills.component.html',
  styleUrls: ['./hard-soft-skills.component.css']
})
export class HardSoftSkillsComponent implements OnInit{
  skills:any;
  editingSkill:any=[]

  constructor(private portfolioData:PortfolioService, private router:Router){
  }

  ngOnInit():void{
    this.portfolioData.getSkills().subscribe(data => {
      this.skills = data;
    })
  }

  onDeleteSkill(item:any){
    this.portfolioData.deleteSkill(item).subscribe(() => (this.skills = this.skills.filter((t: { id: any; }) => t.id !== item.id) ))
  }

  getSingleSkill(skill:any){
    this.editingSkill = skill;
  }

  hasRoute(route:any){
    return this.router.url === route
  }

}
