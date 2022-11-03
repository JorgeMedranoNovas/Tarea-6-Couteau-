import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-genero',
  templateUrl: './genero.page.html',
  styleUrls: ['./genero.page.scss'],
})
export class GeneroPage implements OnInit {
  public name: string= "";
  public genero: string= "";

  generar(){
    this._http.get<any>('https://api.genderize.io/?name='+this.name).subscribe(res=>{
      this.genero = res.gender;
    })
  }

  

  constructor(public _http: HttpClient) { }

  ngOnInit() {
  }

}
