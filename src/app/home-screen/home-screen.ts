import { Component, ViewEncapsulation, Injector, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'home-screen-component',
  templateUrl: './home-screen.html',
  styleUrls: ['./home-screen.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeScreenComponent{

	constructor() {
	}

}
