import { Component, OnInit } from '@angular/core';
import {Villain} from '../villain';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  public villains: Array<Villain> = new Array<Villain>();
  constructor() { }

  ngOnInit() {
  }

  public Add(n: HTMLInputElement,
             u: HTMLInputElement,
             l: HTMLInputElement) {
    this.villains.push(new Villain(n, u, l));
    console.log(new Villain(n, u, l));
  }

}
