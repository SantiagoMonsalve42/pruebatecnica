import { Component, OnInit } from '@angular/core';
import { faCat, faCrow,faDog,faHorse, faFish,faBacteria,faBug,faFrog,faHeart,faAtom,faUser} from '@fortawesome/free-solid-svg-icons';
import { boton } from '../interface/interface';
import { ServicesService } from '../services/services.service';
import {  Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})


export class LoginComponent implements OnInit {
   cantidadBotones=0;
   botonesClickeados: string[] = [];
   nombre="";

   botones: boton[]=[
    {
      nombre: "cuervo",
      clase: faCrow,
      estado: "",
    },
    {
      nombre: "perro",
      clase: faDog,
      estado: "",
    },
    {
      nombre: "gato",
      clase: faCat,
      estado: "",
    },
    {
      nombre: "caballo",
      clase: faHorse,
      estado: "",
    },
    {
      nombre: "pez",
      clase: faFish,
      estado: "",
    },
    {
      nombre: "bacteria",
      clase: faBacteria,
      estado: "",
    },
    {
      nombre: "bug",
      clase: faBug,
      estado: "",
    },
    {
      nombre: "corazon",
      clase: faHeart,
      estado: "",
    },
    {
      nombre: "atom",
      clase: faAtom,
      estado: "",
    },
    {
      nombre: "user",
      clase: faUser,
      estado: "",
    },
    {
      nombre: "frog",
      clase: faFrog,
      estado: "",
    }
  ];


  constructor( private ServicesService: ServicesService,
               private router: Router) { 
    this.ordenAleatorio();
    console.log(this.botones);
  }
 
  ngOnInit(): void {

  }

  ordenAleatorio():void{
    for(let i=0; i<this.botones.length; i++){
        let aux=this.botones[i];
        let indexaux= Math.floor(Math.random()*(this.botones.length))
        this.botones[i]=this.botones[indexaux];
        this.botones[indexaux]=aux;
    }
  }
  desactivarBoton(id: number): void{
    
    this.cantidadBotones++;
    this.botones[id].estado="disabled";
    if(this.cantidadBotones <= 3){
      this.botonesClickeados.push(this.botones[id].nombre);
    }else{
      alert("solo seran tomados en cuenta los tres primeros botones que ingreso");
    }
    console.log(this.nombre);

  }

  iniciarSesion(){
    if(this.nombre.trim().length === 0){
      alert("ingrese su nombre..");
    }else{
        if(this.ServicesService.iniciarSesion(this.botonesClickeados,this.nombre)){
          this.router.navigate(['success']);
        }else{
          
          this.router.navigate(['login']);
          alert("error en el login");
        }
    }
  }
}
