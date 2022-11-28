import { Component, OnInit } from '@angular/core';
import { MobileserviceService } from './mobileservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  id:any;
  ename!:string;
  esal!:number;
  departments:any;
 emplist:any;
 formData:any;
 empData:any;
 
 constructor(private https:MobileserviceService){}
  ngOnInit(){
    this.getUsers();
    
  }
  getUsers(){
    this.https.getUser().subscribe((res:any)=>{
      this.emplist = res;
    })
  }
 
  onSubmit(){
    this.formData = {id:this.id,ename:this.ename,esal:this.esal,dep:this.departments}
    this.https.saveUser(this.formData).subscribe((res:any)=>{
    
      this.emplist = res;
      console.log(res);
    })
    this.getUsers()
  }
  searchEmpByID(id:any){
    this.https.searchEmpByID(id).subscribe((res:any)=>{
      this.empData = res;
      this.id=this.empData.id;
      this.ename=this.empData.ename;
      this.esal=this.empData.esal;
    })
  }
  onupdate(){
    debugger;
    this.formData = {id:this.id,ename:this.ename,esal:this.esal}
    this.https.updateEmp(this.formData).subscribe((res:any)=>{
      this.emplist = res;
      console.log(res);
    })
    this.getUsers()
  }
  deleteEmpByID(id:any){
    this.https.deleteEmp(id).subscribe((res:any)=>{
      this.emplist = res;
    })
    this.getUsers();
  }
  
}
