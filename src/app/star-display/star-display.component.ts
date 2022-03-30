import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-display',
  templateUrl: './star-display.component.html',
  styleUrls: ['./star-display.component.scss']
})
export class StarDisplayComponent implements OnInit {
  @Input() stars: number;
  constructor() { }

  ngOnInit(): void {
  }

}
