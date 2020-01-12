import { Component, OnInit, ChangeDetectionStrategy, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-duration',
  templateUrl: './duration.component.html',
  styleUrls: ['./duration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DurationComponent),
      multi: true
    }
  ]
})
export class DurationComponent implements OnInit, ControlValueAccessor {
  @Input() currentDuration: string;

  durationValue: number;
  onChange: () => void;
  onTouched: () => void;
  disabled: boolean;

  writeValue(value: number): void {
    this.durationValue = value ? value : 0;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  constructor() { }

  ngOnInit() {
  }

}
