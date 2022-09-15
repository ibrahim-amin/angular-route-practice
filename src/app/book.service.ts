import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './book';
import {  map  } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  bookUrl="/api/books";

  constructor(private http:HttpClient) { }

  getBooks():Observable<Book[]>{
    return this.http.get<Book[]>(this.bookUrl);
  }


  // getBook(id:number):Observable<any>{
  //   return this.http.get<Book>(this.bookUrl+"/"+id);
  // }
  
  getBook(id:number):Observable<any>{
    return this.getBooks().pipe(map(books=>books.find(book=>book.id===id)));
  }
  
}
