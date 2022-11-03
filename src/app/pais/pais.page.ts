import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-pais',
  templateUrl: './pais.page.html',
  styleUrls: ['./pais.page.scss'],
})
export class PaisPage implements OnInit {

  public name: string= "";
  public uni = [];
  
  generar(){
    this._http.get<any>('http://universities.hipolabs.com/search?country='+this.name).subscribe(res=>{
     this.uni = res; 
    })
  }
  constructor(public _http: HttpClient) { }

  ngOnInit() {
  }

}
