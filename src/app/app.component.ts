import { Component } from '@angular/core';
declare global {
  interface Window {
    ethereum: any;
    web3: any
  }
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'metamask-angular-template';
}
