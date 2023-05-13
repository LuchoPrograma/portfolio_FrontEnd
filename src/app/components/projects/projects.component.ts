import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit{
  projects:any;
  editingProject:any=[];

  constructor(private portfolioData:PortfolioService, private router:Router){}

  ngOnInit():void{
    this.portfolioData.getProjects().subscribe(data => {
      this.projects = data;
    })
  }

  onEdit(project:any){
    this.editingProject = project;
  }

  onDeleteProject(item:any){
    this.portfolioData.deleteProject(item).subscribe(() => (this.projects = this.projects.filter((t: { id: any; }) => t.id !== item.id) ))
  }

  hasRoute(route:any){
    return this.router.url === route;
  }

}
