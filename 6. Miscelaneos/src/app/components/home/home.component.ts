import { Component, OnInit, OnChanges, DoCheck, AfterContentInit,
          AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `

  <app-ng-style></app-ng-style>

  <app-css></app-css>

  <app-clases></app-clases>

  <p [appResaltado]="'blue'">
    Hola Mundo
  </p>

  <app-ng-switch></app-ng-switch>

  `,
})
export class HomeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
          AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() {
    console.log("constructor");
  }

  ngOnInit() {
    console.log("ngOnInit");
  }

  ngOnChanges() {
    console.log("ngOnChanges");
  }

  ngDoCheck() {
    console.log("ngDoCheck");
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked");
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy");
  }

}
