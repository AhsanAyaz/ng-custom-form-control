import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => RatingComponent),
    },
  ],
})
export class RatingComponent implements OnInit, ControlValueAccessor {
  @Input() disabled = false;
  value = 3;
  hoveredRating = 2;
  isMouseOver = false;

  onChange = (_: any) => {};
  onTouch = (_: any) => {};

  registerOnChange(angularProvidedFunction) {
    console.log('registerOnChange', angularProvidedFunction);
    this.onChange = angularProvidedFunction;
  }

  registerOnTouched(angularProvidedFunction) {
    console.log('registerOnTouched', angularProvidedFunction);
    this.onTouch = angularProvidedFunction;
  }

  writeValue(angularProvidedValue) {
    console.log('writeValue', angularProvidedValue);
    this.value = angularProvidedValue;
  }

  setDisabledState(angularProvidedDisabledVal) {
    console.log('setDisabledState', angularProvidedDisabledVal);
    this.disabled = angularProvidedDisabledVal;
  }

  onRatingMouseEnter(rating: number) {
    if (this.disabled) return;
    this.hoveredRating = rating;
    this.isMouseOver = true;
  }
  onRatingMouseLeave() {
    if (this.disabled) return;
    this.hoveredRating = null;
    this.isMouseOver = false;
  }

  selectRating(rating: number) {
    if (this.disabled) return;
    this.value = rating;
    this.onChange(this.value);
  }
  constructor() {}

  ngOnInit(): void {}
}
