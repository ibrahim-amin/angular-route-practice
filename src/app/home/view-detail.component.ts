import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';
import {Location} from '@angular/common';
@Component({
  selector: 'app-view-detail',
  templateUrl: './view-detail.component.html',
})
export class viewDetailComponent implements OnInit {
    book:Book= new Book();

  constructor(private bookservice:BookService,
    private route:ActivatedRoute,
    private location:Location) { }

  ngOnInit(): void {
    // alert(this.route.snapshot.params['id']);
    //  this.bookservice.getBook(parseInt(this.route.snapshot.params['id'])).subscribe(book=>this.book=book)
  
    //  alert(this.route.snapshot.paramMap.get('id'));
    //  this.bookservice.getBook(parseInt(this.route.snapshot.paramMap.get('id') as string)).subscribe(book=>this.book=book)
     
    
    // this.route.paramMap.subscribe(myparams =>{
    //      alert(myparams.get('id'));
    //       this.bookservice.getBook(parseInt(myparams.get('id') as string)).subscribe(book=>this.book=book)
    //  }) 


      this.route.params.subscribe(myparams =>{
        //  alert(myparams['id']);
          this.bookservice.getBook(parseInt(myparams['id'] as string)).subscribe(book=>this.book=book)
     }) 
    
    }

   
  
  goback(){
      this.location.back();
  }
  

}
