import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form:FormGroup;
  constructor(private formBuilder: FormBuilder, private authenticationService:AuthenticationService,private route:Router){
    this.form = this.formBuilder.group(
      {
        username:['',[Validators.required,Validators.minLength(5)]],
        password:['',[Validators.required,Validators.minLength(8)]],
      }
    )
  }

  get Username(){
    return this.form.get('username')
  }
  get Password(){
    return this.form.get('password')
  }

  onSubmit(event:Event){
    if (this.form.valid){
      event.preventDefault
      console.log(this.form.value);
      this.authenticationService.login(this.form.value).subscribe(data=>{
        console.log("DATA:" + JSON.stringify(data));
        this.route.navigate(['/edicion']);
  
      })
    }else{
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      this.form.markAllAsTouched(); 
    }
   
  }

}
