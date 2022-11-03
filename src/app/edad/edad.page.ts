import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-edad',
  templateUrl: './edad.page.html',
  styleUrls: ['./edad.page.scss'],
})
export class EdadPage implements OnInit {
  public name: string= "";
  public edad: number;
  public estado: string="";
  generar(){

    
this._http.get<any>('https://api.agify.io/?name='+this.name).subscribe(res=>{
  this.edad = res.age.toString();
  if (this.edad <=20){
    this.estado="Joven";
   }else if(this.edad >=21 && this.edad <50) {
     this.estado="Adulto";
   }else{
     this.estado="Anciano";
   }
 


})








  }
  
  
  constructor(public _http: HttpClient) { 
    
    //?name=irma
  }

  ngOnInit() {
    
  }

}