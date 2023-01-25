import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-ciudades',
  templateUrl: './ciudades.page.html',
  styleUrls: ['./ciudades.page.scss'],
})
export class CiudadesPage implements OnInit {
  ciudades: any = []
  searchCiudad:any

  constructor(private router:Router, private http:HttpClient, public toastController : ToastController) { }

  ngOnInit() {
    this.getCiudades().subscribe(res=> {
      console.log("Res", res)
      this.ciudades = res
      this.searchCiudad = this.ciudades
    })
  }

  getCiudades(){
    return  this.http.get("assets/files/ciudades.json").pipe(map((res:any) =>{
      return res.data
    }))
  }

  // async presentToast(){
  //   const toast = await this.toastController.create({
  //     message: 'Ciudad seleccionada', 
  //     duration: 2, 
  //     position: 'bottom'});
  //   toast.present()
  // }

  // async presentAlert(){
  //   const alert = await this.toastController.create({
  //     header: 'Borrar ciudad',
  //     message: 'Se ha borado la ciudad correctamente',
  //     buttons: ['OK']
  //   })
  //   await alert.present()
  //   let result = await alert.onDidDismiss()
  //   console.log(result)
  // }

  async presentAlert2(){
    const alert = await this.toastController.create({
      header: 'Borrar ciudad',
      message: 'Se ha borado la ciudad correctamente',
      buttons: [
        {
          text: 'NO',
          handler: ()=>{
            console.log('Acción cancelada')
          }
        },
        {
          text: 'SI',
          handler: ()=>{
            console.log('Ciudad eliminada')
          }
        }
      ]
    })
    await alert.present()
    let result = await alert.onDidDismiss()
    console.log(result)
  }

  searchCiudades(event:any){
    const text = event.target.value
    this.searchCiudad = this.ciudades
    if(text && text.trim() != ''){
      this.searchCiudad = this.searchCiudad.filter((ciudad:any) => {
        return (ciudad.name.toLowerCase().indexOf(text.toLowerCase()) > -1)
      })
    } 
  }
}
