import { Component, ElementRef, OnInit } from '@angular/core';
import { GetImageResponse } from 'src/service/images/attribute';
import getImage from 'src/service/images/image';
import { UpUser } from 'src/service/search/userattr';
import getUsers from 'src/service/search/usersearch';


@Component({
  selector: 'app-myapp',
  templateUrl: './myapp.component.html',
  styleUrls: ['./myapp.component.css']
})
export class MyappComponent implements OnInit {


  datas: Array<UpUser>=[]

  constructor() {
    }

  async ngOnInit(): Promise<void> {
    await getUsers().then(user=>this.datas=user)

    //console.log(getUsers())
    }

  }




