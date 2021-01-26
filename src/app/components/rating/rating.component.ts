import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})
export class RatingComponent implements OnInit {
  value = 2;
  hoveredRating = 2;
  isMouseOver = false;

  onRatingMouseEnter(rating: number) {
    this.hoveredRating = rating;
    this.isMouseOver = true;
  }
  onRatingMouseLeave() {
    this.hoveredRating = null;
    this.isMouseOver = false;
  }
  selectRating(rating: number) {
    this.value = rating;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
