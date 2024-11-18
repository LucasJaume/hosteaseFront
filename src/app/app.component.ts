import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HosteaseFront';
  constructor(private router: Router) {}
  volver(){
    this.router.navigate(['/login']);
    localStorage.clear();
  }
}
