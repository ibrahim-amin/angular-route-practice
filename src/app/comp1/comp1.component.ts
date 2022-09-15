import { Component, OnInit } from '@angular/core';
import { NumlistService } from '../numlist.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css'],
  providers:[NumlistService]
})
export class Comp1Component implements OnInit {

  constructor(private _numlistService:NumlistService) { }

   list!:number[];
  ngOnInit(): void {
    this.list=this._numlistService.getnumber();

  }

  addnumber(num:any){
      this._numlistService.addnumber(num);
      this.list=this._numlistService.getnumber();
  }
}
