import { Component,OnInit } from '@angular/core';

import { PortfolioService } from 'src/app/services/portfolio.service';

import { faPen} from '@fortawesome/free-solid-svg-icons'
import { Person } from 'src/app/portfolio';




@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent{

  aboutData:any;

  fapen = faPen;

  constructor(private datosPortfolio:PortfolioService){
  }
  ngOnInit():void{
    
    this.datosPortfolio.getAbout().subscribe(data =>{
      this.aboutData = data;
    });
    
  }
}
