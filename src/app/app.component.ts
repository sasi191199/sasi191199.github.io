import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App';
  App=[
    {name:'tajmahal',image:'C:\Users\Home\Desktop\Angularproj\App\src\assets\images\tajmahal.jpg',link:'/tajmahal'},
    {name:'great wall of china',image:'C:\Users\Home\Desktop\Angularproj\App\src\assets\images\greatwallofchina.jpg',link:'/greatwall'},
  ]
}
