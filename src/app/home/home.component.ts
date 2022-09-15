import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private bookservice:BookService) { }

  ngOnInit(): void {
    this.getBooks();
  }
  
  books!:Book[];
  getBooks(){
    this.bookservice.getBooks().subscribe(books=>{this.books=books})
    
   }

}
