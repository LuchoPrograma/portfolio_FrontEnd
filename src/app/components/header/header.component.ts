import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  isLogged:boolean = false;

  constructor(private routes:Router){

  }

  hasRoute(route:any){
    return this.routes.url === route
  }
  changeRoute(){
    this.routes.navigate(['']);
  }

 
}
