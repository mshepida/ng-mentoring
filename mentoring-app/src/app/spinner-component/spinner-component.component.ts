import { Component, OnInit } from '@angular/core';
import { SpinnerService } from './spinner.service';

@Component({
  selector: 'app-spinner-component',
  templateUrl: './spinner-component.component.html',
  styleUrls: ['./spinner-component.component.scss']
})
export class SpinnerComponentComponent implements OnInit {

  constructor(public spinnerService: SpinnerService) { }

  ngOnInit() {
  }

}
