import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { startWith } from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  

  constructor(public alertController: AlertController, private navCtrl: NavController) {
  }
  

  async presentAlert(event : any){

    let message = ""

    switch(event.target.alt){
      case 'great':{
        message = 'Glad you had a great day!'
        break;
      }
      case 'meh':{
        message = 'Let´s make it better!'
        break;
      }
      case 'bad':{
        message = 'Aww, let´s fix it!'
        break;
      }

    }

    const alert = await this.alertController.create({
      header: message,
      subHeader: 'Want to write about it?',
      cssClass: 'custom-aler',
      buttons: [
        {
          text: 'Maybe later',
          cssClass: 'alert-button-cancel',
          // handler: () => {
          //   this.navCtrl.navigateForward(tabs/tab2)
          // }
        },
        {
          text: 'Sure! :D',
          cssClass: 'alert-button-confirm'
        }
      ]
    })
    await alert.present()
    let result = await alert.onDidDismiss()
    console.log(result)
  }
  
  obtainQuote(){
    fetch("https://type.fit/api/quotes")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
    });
  }


}
