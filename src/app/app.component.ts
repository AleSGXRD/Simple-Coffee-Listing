import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { CoffeeElementComponent } from './components/coffee-element/coffee-element.component';
import { ApiRequestService } from './services/api-request.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterModule,CoffeeElementComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Simple-Coffee-Listing';

  coffeeList:any[] = [];
  filterAvailables: boolean = false;

  constructor(
    private apiRequestService: ApiRequestService
  ){

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getAll();
  }


  getAll(){
    this.apiRequestService.getCoffeeList().subscribe(res => {this.coffeeList = res; }, err =>{console.log(err)});
    this.filterAvailables = false;

  }
  getAvialables(){
    this.coffeeList = this.coffeeList.filter(n => n.available === true);
    this.filterAvailables = true;
  }
}
