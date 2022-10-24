import { Component } from '@angular/core';
import generateSignature from 'src/sigiature/genrates';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'uprodit';
}

console.log(generateSignature('https://api.uprodit.com/v2/profile/personal/en/51'))
