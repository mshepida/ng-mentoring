import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-duration',
  templateUrl: './duration.component.html',
  styleUrls: ['./duration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DurationComponent implements OnInit {
  @Output() valueChange: EventEmitter<number> = new EventEmitter();
  @Input() currentDuration: number;

  durationValue = 0;

  constructor() { }

  ngOnInit() {
  }

  public onValueChange(): void {
    this.valueChange.emit(this.currentDuration);
  }

}
