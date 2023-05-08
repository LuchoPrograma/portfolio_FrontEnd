import { Component,OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit{
  projects:any;

  constructor(private portfolioData:PortfolioService){}

  ngOnInit():void{
    this.portfolioData.getProjects().subscribe(data => {
      this.projects = data;
    })
  }

  onDeleteProject(item:any){
    this.portfolioData.deleteProject(item).subscribe(() => (this.projects = this.projects.filter((t: { id: any; }) => t.id !== item.id) ))
  }

}
