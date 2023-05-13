import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'}) //avisamos que mandamos el contenido en formato json
}

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  apiUrl:string = "http://localhost:3000";

  constructor(private http:HttpClient) { }

  getAbout():Observable<any>{
    return this.http.get(this.apiUrl + "/persona")
  }
  getEducation():Observable<any>{
    return this.http.get(this.apiUrl + "/educacion")
  }
  getExperience():Observable<any>{
    return this.http.get(this.apiUrl + "/experiencia")
  }
  getSkills():Observable<any>{
    return this.http.get(this.apiUrl + "/habilidades")
  }
  getProjects():Observable<any>{
    return this.http.get(this.apiUrl + "/proyectos")
  }

  addEducation(item:any):Observable<any>{
    return this.http.post(this.apiUrl + "/educacion/", item)
  }

  deleteEducation(item:any):Observable<any>{
    return this.http.delete(this.apiUrl + "/educacion/" + item.id)
  }
  deleteExperience(item:any):Observable<any>{
    return this.http.delete(this.apiUrl + "/experiencia/" + item.id)
  }
  deleteSkill(item:any):Observable<any>{
    return this.http.delete(this.apiUrl + "/habilidades/" + item.id)
  }
  deleteProject(item:any):Observable<any>{
    return this.http.delete(this.apiUrl + "/proyectos/" + item.id)
  }

  
  editAbout(item:any):Observable<any>{
    return this.http.put(this.apiUrl + "/persona", item, httpOptions)
  }

}
