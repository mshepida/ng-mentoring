import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  public searchInput: string;
  constructor() { }

  ngOnInit() {
  }

  public onFindClick(): void {
    console.log(this.searchInput);
  }

}
