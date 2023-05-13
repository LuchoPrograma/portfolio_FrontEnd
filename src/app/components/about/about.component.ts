import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{

  aboutData:any;

  constructor(private datosPortfolio:PortfolioService,private router:Router){
  }
  ngOnInit():void{
    
    this.datosPortfolio.getAbout().subscribe(data =>{
      this.aboutData = data;
    });
    
  }

  editAbout(about:any){
    this.datosPortfolio.editAbout(about).subscribe();
  }

  hasRoute(route:any){
    return this.router.url === route
  }

}
