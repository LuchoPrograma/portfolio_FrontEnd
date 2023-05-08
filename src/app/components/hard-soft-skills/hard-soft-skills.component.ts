import { Component,OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-hard-soft-skills',
  templateUrl: './hard-soft-skills.component.html',
  styleUrls: ['./hard-soft-skills.component.css']
})
export class HardSoftSkillsComponent implements OnInit{
  skills:any;

  constructor(private portfolioData:PortfolioService){
  }

  ngOnInit():void{
    this.portfolioData.getSkills().subscribe(data => {
      this.skills = data;
    })
  }

  onDeleteSkill(item:any){
    this.portfolioData.deleteSkill(item).subscribe(() => (this.skills = this.skills.filter((t: { id: any; }) => t.id !== item.id) ))
  }

}
