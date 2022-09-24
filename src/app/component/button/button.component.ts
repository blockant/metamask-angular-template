import { Component, OnInit } from '@angular/core';
import { ContractService } from 'src/app/services/contract.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  constructor(private contractService: ContractService) { }

  ngOnInit(): void {
  }
  connectMetamask(){
    console.log('I Was Clicked')
    this.contractService.connectAccount()
  }
}
