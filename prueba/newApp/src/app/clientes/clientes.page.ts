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
  permission: boolean | undefined

  searchUsuario:any

  constructor(
    private router:Router,
    private http:HttpClient) {

   }

  ngOnInit() {
    
    this.permission = false
    this.getUsers().subscribe(res=>{
      console.log("Res", res)
      this.users = res;
      this.searchUsuario = this.users
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

  searchClientes(event:any){
    const text = event.target.value
    this.searchUsuario = this.users
    if(text && text.trim() != ''){
      this.searchUsuario = this.searchUsuario.filter((user:any)=>{
        this.permission = true
        return (user.name.toLowerCase().indexOf(text.toLowerCase()) > -1)
      })
    }
  }
}
