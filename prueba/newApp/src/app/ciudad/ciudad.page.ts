import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-ciudad',
  templateUrl: './ciudad.page.html',
  styleUrls: ['./ciudad.page.scss'],
})
export class CiudadPage implements OnInit {

  id:any
  finalId:any
  ciudades:any = []
  name:any
  image:any
  desc:any

  constructor( private activatedRoute: ActivatedRoute) {
   
   }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id")
    this.finalId = -this.id-1
    console.log("id", this.id)
    
  }

  getCiudades(){
    return this.http.get("assets/files/ciudades.json").pipe(map((res:any)=>{return res.data}))
  }

}
