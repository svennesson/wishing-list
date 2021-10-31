import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  public bounce: boolean;

  constructor() {
    this.bounce = true;
    // setTimeout(() => {
    //   this.bounce = false;
    // }, 3000);
  }

  ngOnInit(): void {
  }

}
