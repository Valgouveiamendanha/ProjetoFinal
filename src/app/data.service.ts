import { HttpClient } from '@angular/common/http';
import { isNgTemplate } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DataService {
  cepbusca=[];
  constructor(private https: HttpClient) { }

  public get():Observable <any>{
    return this.https.get("http://localhost:8080/estado")
  }

  
public buscar(id):Observable<any>{
  return this.https.get('http://viacep.com.br/ws/'+id+'/json/')
 console.log(this.https.get('http://viacep.com.br/ws/74515020/json/'))
}

posts=[];

public buscarcep(){
  return this.https.get('http://viacep.com.br/ws/74515020/json/')
    .subscribe((response: any[]) => {
      this.posts = response;
     console.log(this.posts)
   
    })
 
   
  }






}



 
