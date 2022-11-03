import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Component({
  selector: 'app-clima',
  templateUrl: './clima.page.html',
  styleUrls: ['./clima.page.scss'],
})
export class ClimaPage implements OnInit {

  
  public clima: number=0;
  public temperatura: number=0;
  public estado: string=""
  
  generar(){
    this._http.get<any>('https://api.open-meteo.com/v1/forecast?latitude=18.46&longitude=-69.90&current_weather=true&timezone=GMT').subscribe(res=>{
     this.temperatura = res.current_weather.temperature.toString();
     this.clima = res.current_weather.weathercode.toString();
     if(this.clima=1){
      this.estado ="despejado";

     }else if(this.clima=2){
      this.estado ="parcialmente nublado";
     }
     else if(this.clima=3){
      this.estado ="nublado";
    }else if(this.clima=45){this.estado ="Niebla";
      
    }else if(this.clima=48){this.estado ="niebla de escarcha depositada";
      
    }else if(this.clima=51){this.estado ="Intensidad ligera";
      
    }else if(this.clima=53){this.estado ="moderada";
      
    }else if(this.clima=55){this.estado ="densa";
      
    }else if(this.clima=56){this.estado ="Llovizna Engelante: Intensidad ligera";
      
    }else if(this.clima=57){this.estado ="Llovizna Engelante: densa";
      
    }else if(this.clima=61){this.estado ="	Lluvia: Intensidad leve";
      
    }else if(this.clima=63){this.estado ="	Lluvia: moderada";
      
    }else if(this.clima=65){ this.estado ="	Lluvia: fuerte";
      
    }else if(this.clima=66){this.estado ="Lluvia helada: Intensidad ligera";
      
    }else if(this.clima=67){this.estado ="Lluvia helada: fuerte";
      
    }else if(this.clima=80){this.estado ="Lluvias: Leve";
      
    }else if(this.clima=81){this.estado ="Lluvias: moderada";
      
    }else if(this.clima=82){this.estado ="Lluvias: violenta";
      
    }











     


    })

  }
  
  
  constructor(public _http: HttpClient) { }

  ngOnInit() {
   this.generar(); 
  }

}
