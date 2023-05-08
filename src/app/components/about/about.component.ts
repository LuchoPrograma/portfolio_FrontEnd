import { Component,OnInit } from '@angular/core';

import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{

  aboutData:any;

  constructor(private datosPortfolio:PortfolioService){
  }
  ngOnInit():void{
    
    this.datosPortfolio.getAbout().subscribe(data =>{
      this.aboutData = data;
    });
    
  }
}
