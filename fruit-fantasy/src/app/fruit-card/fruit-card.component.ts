import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Fruit } from '../models/fruit';

@Component({
  selector: 'app-fruit-card',
  templateUrl: './fruit-card.component.html',
  styleUrls: ['./fruit-card.component.css']
})
export class FruitCardComponent implements OnInit {

  @Input()
  fruit?: Fruit;
  constructor() { }

  ngOnInit(): void {
  }

  @Output()
  hoveredFruit: EventEmitter<Fruit> = new EventEmitter<Fruit>();
  showDetails(fruit:any){
    this.hoveredFruit.emit(fruit);
  }
}
