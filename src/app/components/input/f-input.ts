import { Component, ViewEncapsulation, Input, ViewChild, ElementRef } from "@angular/core";
import { v4 as uuid } from 'uuid';

@Component({
    selector: 'f-input',
    templateUrl: './f-input.html',
    encapsulation: ViewEncapsulation.None,
})
export class FInputComponent {

    @ViewChild('element') _element: ElementRef;

    @Input() label: string;
    @Input() type: string = 'text';
    @Input() placeholder: string;
    @Input() isDisabled: boolean = false;
    @Input() isReadonly: boolean = false;
    @Input() isRequired: boolean = false;
    @Input() name: string = uuid();
    @Input() mask: string;
    @Input() focus: boolean = false;
    @Input() maxLength: number;

    constructor() {
        this._setupInput();
    }

    _setupInput() {
        let inputElement = this._element.nativeElement;
        if(this.focus) inputElement.focus();
        if(this.mask) this.setMask();
    }

    setMask() {
        let mask = {
            'decimal': () => {

            },
            'date': '99/99/9999',
            'money': () => {

            },
        }
    }
}