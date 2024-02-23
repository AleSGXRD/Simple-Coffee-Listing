import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';
@Component({
  selector: 'coffee-element',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './coffee-element.component.html',
  styleUrl: './coffee-element.component.css'
})
export class CoffeeElementComponent {
  @Input() available:boolean =false;
  @Input() name:string = '';
  @Input() urlimg:string = '';
  @Input() price:string = '';
  @Input() popular:boolean = false;
  @Input() rating:Number =0;
  @Input() votes:Number =0;
  constructor(){

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
}
