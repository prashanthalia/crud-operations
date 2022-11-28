import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MobileserviceService {

  constructor(private http:HttpClient) { }

  getUser(){
   return this.http.get('http://localhost:3000/posts')
  }
  saveUser(formData:any){
    return this.http.post('http://localhost:3000/posts/',formData)
  }
  deleteEmp(id:number){
    return this.http.delete('http://localhost:3000/posts/'+id,)
  }
  updateEmp(formData:any){
    return this.http.put('http://localhost:3000/posts/'+formData.id,formData)
  }
  searchEmpByID(id:any){
    return this.http.get('http://localhost:3000/posts/'+id)
  }
 
}
