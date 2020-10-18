import { element } from 'protractor';
import { HttpClient } from '@angular/common/http';
import { DataService } from './../../data.service';
import { Component, OnInit, NgModule, Injectable } from '@angular/core';
import { of } from 'rxjs';



@Component({
  selector: 'app-inclui',
  templateUrl: './inclui.component.html',
  styleUrls: ['./inclui.component.css']
})
export class IncluiComponent implements OnInit {


public idcep: string= '';
fisica: boolean = false
pj: boolean = false
cep = [];
 

  constructor(private dataService: DataService) {

  }

  ngOnInit(): void {

  }


  public tipo(){
   
    this.fisica=true;
    this.pj=false;
    console.log(this.fisica)
  }
  
  public tipoj(){
   
    this.pj=true;
    this.fisica=false;
    console.log(this.pj)
  }
  

  getPeople(id){
    console.log(id+"Eu sou o ID")
    this.dataService.buscar(id).subscribe(
      data => {
        this.cep = data as string[];
        console.log(data)
      },
      (error) => console.log(error),
      () => console.log("Complete")
    )
  }




}
