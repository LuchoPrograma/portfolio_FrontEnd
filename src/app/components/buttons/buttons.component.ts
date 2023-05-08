import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  onClick():void{
    this.btnClick.emit();
  }


}
