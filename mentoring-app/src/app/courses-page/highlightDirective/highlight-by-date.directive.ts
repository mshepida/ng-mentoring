import { Directive, Input, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlightByDate]'
})
export class HighlightByDateDirective implements OnInit {
  @Input('appHighlightByDate') creationDate: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.hightlight(this.creationDate);
  }

  private hightlight(creationDate: string): void {
    const difference = Date.now() - +new Date(creationDate);
    const daysDifference = Math.floor(difference / (1000 * 60 * 60 * 24));
    if (daysDifference <= 14 && daysDifference >= 0) {
      this.renderer.setStyle(this.el.nativeElement, 'border', ' 1px solid green');
    } else if ( daysDifference <= 0 ) {
      this.renderer.setStyle(this.el.nativeElement, 'border', ' 1px solid blue');
    }
  }

}
