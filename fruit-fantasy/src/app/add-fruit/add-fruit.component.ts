import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Fruit } from '../models/fruit';
import { FRUITS } from '../models/fruits';

@Component({
  selector: 'app-add-fruit',
  templateUrl: './add-fruit.component.html',
  styleUrls: ['./add-fruit.component.css']
})
export class AddFruitComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  saveFruit(id:string, name:string, price:string, unit:string, imageURL:string){
    let newFruit:Fruit = {
      id:parseInt(id),
    name: name,
    price: parseInt(price),
    unit: unit,
    imageURL: imageURL
    };
    alert(newFruit.name)
    FRUITS.push(newFruit);

  }
}
