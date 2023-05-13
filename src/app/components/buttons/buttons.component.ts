import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { faTrash, faPen, faAdd } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent {
  @Output() btnClick = new EventEmitter
  @Input() typeButton:string = "";

  faTrash = faTrash;
  faPen = faPen;
  faAdd = faAdd;

  constructor(private router:Router){
    
  }

  onClick():void{
    this.btnClick.emit();
  }

  hasRoute(route:any){
    return this.router.url === route
  }


}
