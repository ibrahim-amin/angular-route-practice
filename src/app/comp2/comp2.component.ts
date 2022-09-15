import { Component, OnInit } from '@angular/core';
import { NumlistService } from '../numlist.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css'],
  providers:[NumlistService]

})
export class Comp2Component implements OnInit {

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
