import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements OnInit {

  users: any = [];

  constructor(
    private router:Router,
    private http:HttpClient) {

   }

  ngOnInit() {
    
    this.getUsers().subscribe(res=>{
      console.log("Res", res)
      this.users = res;
    });
  }

  redHome(){
    this.router.navigate(['/home'])
  }

  getUsers(){
    return this.http
    .get("./assets/files/clientes.json")
    .pipe(
      map((res:any) => { 
        return res.data;
      })
      )
  }
}
