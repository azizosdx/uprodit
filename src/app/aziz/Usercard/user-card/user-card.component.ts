import { UpUser } from './../../../../service/search/userattr';
import { Component, Input, OnInit } from '@angular/core';
import { GetImageResponse } from 'src/service/images/attribute';
import getImage from 'src/service/images/image';
import image from 'src/service/images/image';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input()
   User!:UpUser

  taswira:any;

  constructor() { }

  async ngOnInit(): Promise<void> {
    this.taswira=await this.img(this.User.image_id)
  }



    parseImageToDataUrl = (image: GetImageResponse) => {
      return `data:${image.mimeType};base64,${image.b64Content}`;
    }

    img=async(id:string)=>{
      let image=await getImage(id)
      return this.parseImageToDataUrl(image)
      }

}
