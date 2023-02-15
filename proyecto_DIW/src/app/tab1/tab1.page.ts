import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public alertController: AlertController, private navCtrl: NavController) {}

  async presentAlert(){
    const alert = await this.alertController.create({
      header: 'Glad you had a great day!',
      subHeader: 'Want to write about it?',
      cssClass: 'custom-aler',
      buttons: [
        {
          text: 'Maybe later',
          cssClass: 'alert-button-cancel',
          handler: () => {
            this.navCtrl.navigateForward('tabs/tab2')
          }
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



}
