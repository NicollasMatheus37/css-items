import { Component, ViewEncapsulation, Injector, OnInit, Input, ViewChild, ElementRef } from "@angular/core";
import { Router } from "@angular/router";
import { Title } from "@angular/platform-browser";

@Component({
    selector: 'f-navbar',
    templateUrl: './f-navbar.html',
    encapsulation: ViewEncapsulation.None,
})
export class FNavbarComponent implements OnInit {

    @ViewChild('element') private _element: ElementRef;

	title = 'App - CSS items';

	public menuItems = ['home', 'f-input', 'f-select'];
    
	_title: Title;
    _router: Router;
    
    constructor(injector: Injector) {
		this._title = injector.get(Title);
		this._router = injector.get(Router);
    }
    
	navigate(item) {
		this._router.navigate([item]);
    }
    
    ngOnInit() {
		this._title.setTitle(this.title);
    }
}