import { Component, Input } from '@angular/core';
import { Contribution } from '../contribution';
import { Stuffdone } from '../stuffdone';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  @Input() new:Contribution ={
    content:""
  }

  @Input() new2:Stuffdone = {
    stuff:""
  }

  constructor() {}

  todayDate = new Date();
  
  contributions:string[] = []
  stuffdone:string[] = []

  addContribution(){
    if(this.new.content.trim().length === 0){
      return
    }
    this.contributions.push(this.new.content)

    this.new.content = ""
  }

  addStuffDone(){
    if(this.new2.stuff.trim().length === 0){
      return
    }
    this.stuffdone.push(this.new2.stuff)

    this.new2.stuff = ""
  }
}
