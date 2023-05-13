import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  url="http://localhost:3000/autenticacion"
  currentUserSubject: BehaviorSubject<any>;
  constructor(private http:HttpClient) {
    console.log("The authentication service is running")
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser') || '{}'))
  }

  login(credentials:any):Observable<any>{
    return this.http.post(this.url,credentials).pipe(map(data=>{
      sessionStorage.setItem('currentUser',JSON.stringify(data));
      return data;
    }))
  }



}