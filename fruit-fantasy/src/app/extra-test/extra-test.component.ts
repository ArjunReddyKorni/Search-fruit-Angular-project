import { Component, OnInit, Input } from '@angular/core';
import { Fruit } from '../models/fruit';

@Component({
  selector: 'app-extra-test',
  templateUrl: './extra-test.component.html',
  styleUrls: ['./extra-test.component.css']
})
export class ExtraTestComponent implements OnInit {
  @Input()
  public parentData:Fruit={};
  
  constructor() { }

  ngOnInit(): void {
  }

}
