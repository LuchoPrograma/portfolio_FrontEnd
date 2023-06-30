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

  apiUrl:string = "http://localhost:3000"; // <-- Utilizando JSON server (ejecutar en consola: json-server --watch db.json )
  springUrl:string = "http://localhost:8080";
  //springUrl:string = "https://backend-portfolio-vbe3.onrender.com"

  constructor(private http:HttpClient) { }

  getAbout():Observable<any>{
    return this.http.get(this.springUrl + "/persona/get")
  }
  getEducation():Observable<any>{
    return this.http.get(this.springUrl + "/educacion/get")
  }
  getExperience():Observable<any>{
    return this.http.get(this.springUrl + "/experiencia/get")
  }
  getSkills():Observable<any>{
    return this.http.get(this.springUrl + "/habilidad/get")
  }
  getProjects():Observable<any>{
    return this.http.get(this.springUrl + "/proyecto/get")
  }

  addEducation(item:any):Observable<any>{
    return this.http.post(this.springUrl + "/educacion/add", item)
  }
  addExperience(item:any):Observable<any>{
    return this.http.post(this.springUrl + "/experiencia/add", item)
  }
  addSkill(item:any):Observable<any>{
    return this.http.post(this.springUrl + "/habilidad/add", item)
  }

  editAbout(item:any):Observable<any>{
    return this.http.put(this.apiUrl + "/persona/", item, httpOptions)
  }
  editEducation(item:any):Observable<any>{
    return this.http.put(this.apiUrl + "/educacion/" + item.id, item, httpOptions)
  }
  editExperience(item:any):Observable<any>{
    return this.http.put(this.apiUrl + "/experiencia/" + item.id, item, httpOptions)
  }
  editSkill(item:any):Observable<any>{
    return this.http.put(this.apiUrl + "/habilidad/", item, httpOptions)
  }
  editProject(item:any):Observable<any>{
    return this.http.put(this.apiUrl + "/proyecto/", item, httpOptions)
  }

  deleteEducation(item:any):Observable<any>{
    return this.http.delete(this.springUrl + "/educacion/delete/" + item.id)
  }
  deleteExperience(item:any):Observable<any>{
    return this.http.delete(this.springUrl + "/experiencia/delete/" + item.id)
  }
  deleteSkill(item:any):Observable<any>{
    return this.http.delete(this.springUrl + "/habilidad/delete/" + item.id)
  }
  deleteProject(item:any):Observable<any>{
    return this.http.delete(this.springUrl + "/proyecto/delete/" + item.id)
  }

  
  

}
