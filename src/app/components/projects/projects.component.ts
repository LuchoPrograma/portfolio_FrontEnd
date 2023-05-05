import { Component,OnInit } from '@angular/core';
import { faAdd,faPen,faTrash } from '@fortawesome/free-solid-svg-icons';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects:any;

  faPen = faPen;
  faAdd = faAdd;
  faTrash = faTrash;

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
