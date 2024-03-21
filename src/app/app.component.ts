import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'monitoring_service';
  hi(){
    console.log('Hi!');
    this.title = 'Monitor!'
  }
}
