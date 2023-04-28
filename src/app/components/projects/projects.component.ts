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

  constructor(private dataPortfolio:PortfolioService){}

  ngOnInit():void{
    this.dataPortfolio.obtenerDatos().subscribe(data => {
      this.projects = data.proyectos;
    })
  }


}
