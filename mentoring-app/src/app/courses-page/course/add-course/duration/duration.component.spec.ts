import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatInputModule } from '@angular/material/input';
import { DurationComponent } from './duration.component';
import { DurationPipe } from 'src/app/courses-page/pipes/durationPipe/duration.pipe';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('DurationComponent', () => {
  let component: DurationComponent;
  let fixture: ComponentFixture<DurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DurationComponent, DurationPipe ],
      imports: [MatInputModule, FormsModule, BrowserAnimationsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit value on value change', () => {
    spyOn(component.valueChange, 'emit');
    component.onValueChange();

    expect(component.valueChange.emit).toHaveBeenCalled();
  });
});
