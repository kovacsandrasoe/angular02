import {Component, Input, OnInit} from '@angular/core';
import {Villain} from '../villain';

@Component({
  selector: 'app-villain-card',
  templateUrl: './villain-card.component.html',
  styleUrls: ['./villain-card.component.css']
})
export class VillainCardComponent implements OnInit {
  @Input() v_name: string;
  @Input() v_url: string;
  @Input() v_level: number;
  public v_width: string;
public villain: Villain;
  constructor() {
    this.v_width = 'width: ' + this.v_level + '%';
  }

  ngOnInit() {

  }

}
