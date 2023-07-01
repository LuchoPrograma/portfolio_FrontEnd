import { Component,EventEmitter,Input, Output } from '@angular/core';


@Component({
  selector: 'app-about-edit',
  templateUrl: './about-edit.component.html',
  styleUrls: ['./about-edit.component.css']
})
export class AboutEditComponent {
  @Output() onEditAbout = new EventEmitter;

  @Input() id:string = "";
  @Input() nombre:string = "";
  @Input() apellido:string = ""; 
  @Input() titulo:string = ""; 
  @Input() acercaDe:string = "";  
  @Input() urlFoto:string = "";

  onEdit():void{
    
    const {id,nombre, apellido, titulo, acercaDe, urlFoto} = this;
    const editAbout = {id,nombre, apellido, titulo, acercaDe, urlFoto};
 
    this.onEditAbout.emit(editAbout);
  }
}
