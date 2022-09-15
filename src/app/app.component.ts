import { Component, HostListener } from '@angular/core';
import { HttpClientBackendService } from 'angular-in-memory-web-api';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // template:`
  // <h1>Template Example</h1>
  // `
})

export class AppComponent {
  title = 'angularroute';
  title1 ='angular route 1'
  renderer: any;
  el: any;


// Host HostListener example

  @HostListener('click') onclicked(){

    alert('clicked');
  
  }
@HostListener('mouseover') onmouseover(){
      console.log('sdfdsf');
}

company:any;


constructor(private cookie:CookieService){
  
}
 
// cookie example
click(){
  this.cookie.set('userid','ABC');
  alert(this.cookie.get('userid'));
  this.cookie.set('UserType',"Admin");
  this.cookie.delete('userid');
  
}

}





