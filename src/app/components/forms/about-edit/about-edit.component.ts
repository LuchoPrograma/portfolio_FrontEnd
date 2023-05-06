import { Component,Input } from '@angular/core';



@Component({
  selector: 'app-about-edit',
  templateUrl: './about-edit.component.html',
  styleUrls: ['./about-edit.component.css']
})
export class AboutEditComponent {
  @Input() nombre:string = "";
  @Input() apellido:string = ""; 
  @Input() titulo:string = ""; 
  @Input() descripcion:string = "";  

  
}
