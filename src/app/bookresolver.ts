import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Resolve, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { Book } from './book';
import { BookService } from './book.service';
import { catchError, map,  } from 'rxjs/operators';

@Injectable()
export class BookResolver implements Resolve<Book> {
 
  constructor(private bookservice:BookService,private router:Router){}
 

  resolve(route: ActivatedRouteSnapshot) : Observable<Book>  {
   
    let id =parseInt(route.paramMap.get('id') as string);
    console.log('Resolveing for  '+id);
      // return this.bookservice.getBook(id);

     return  this.bookservice.getBook(id).pipe(map(book =>{
      console.log(book)
        if(book){
            return book;
        }
       else{
        this.router.navigate(['/merchant']);
        return null;
       }
        // else
        // {
          
        //   // alert("not found");
        //   //           this.router.navigate(['/merchant']);
        //   //           return null;
        // }
        
     }
    ));

     

     
  }
     
  }


  

