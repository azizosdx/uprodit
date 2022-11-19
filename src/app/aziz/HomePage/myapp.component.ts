import { Component, ElementRef, OnInit } from '@angular/core';
import { GetImageResponse } from 'src/service/images/attribute';
import getImage from 'src/service/images/image';
import { UpUser } from 'src/service/search/userattr';
import getUsers from 'src/service/search/usersearch';
import { SearchQS } from 'src/service/search/userattr';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-myapp',
  templateUrl: './myapp.component.html',
  styleUrls: ['./myapp.component.css']
})
export class MyappComponent implements OnInit {

  private subjectKey =new Subject<any>();
  datas: Array<UpUser>=[]
  searchText:any

  constructor() {
    }

  async ngOnInit(): Promise<void> {
    await getUsers().then(user=>this.datas=user)
    this.subjectKey.pipe(debounceTime(500)).subscribe(async (d)=>{
      console.log(d);
      await getUsers({
        startIndex:0,
        maxResults:15,
        terms:d,
    }).then(user=>this.datas=user)
    }
    )
    }



    async onSearch($event: any){
      const value=$event.target.value;
      this.subjectKey.next(value);
    }

  }




