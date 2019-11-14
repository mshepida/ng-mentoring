import { HighlightByDateDirective } from './highlight-by-date.directive';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  template: `<div [appHighlightByDate]="creationDate"> Dummy template </div>`
})

class TestComponent {
  creationDate: Date =  new Date(2019, 10, 7);
}

describe('HighlightByDateDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let hostElement: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HighlightByDateDirective, TestComponent]
    });

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    hostElement = fixture.debugElement.query(By.css('div'));
    fixture.detectChanges();
  });

  it('should add green border if newly created course', () => {
    expect(hostElement.nativeElement.style.border).toEqual('1px solid green');
  });
});
