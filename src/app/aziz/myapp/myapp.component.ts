import { Client } from 'src/service/axios';
import { endpoints } from './../../../service/endpoints';
import { Component, OnInit } from '@angular/core';
import { SearchQS, UpUser } from './attributes';

@Component({
  selector: 'app-myapp',
  templateUrl: './myapp.component.html',
  styleUrls: ['./myapp.component.css']
})
export class MyappComponent implements OnInit {

  data : any

  hama="azizos"

  constructor() {
    }

  ngOnInit(): void {
    this.data=this.search();

  }

    search=async (
    querySettings : SearchQS={
        startIndex:0,
        maxResults:20,
     }):Promise<UpUser[]> =>{

        let endpoint=endpoints.search;

        console.log(Object.entries(querySettings))

        Object.entries(querySettings).forEach(([key,value])=>(endpoint += (key == "startIndex" || (key && value)) ? `&${key}=${value}` : ''))

        const resp=await Client.get<UpUser[]>(endpoint)
        console.log(resp.data)
        return resp.data

  }

}



