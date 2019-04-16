import { Component, ViewEncapsulation, Input } from "@angular/core";

@Component({
    selector: 'n-input',
    templateUrl: './n-input.html',
    styleUrls: ['./n-input.css'],
    encapsulation: ViewEncapsulation.None,
})
export class NInputComponent {

    @Input() form;
    @Input() type; //color, date, datetime, email, month, number, password, search, tel, text, time, url, week
    @Input() label;
    @Input() mask; //number, decimal, date, hour, cpf, cnpj
    @Input() icon;
    @Input() maxLength;
    @Input() autocomplete; //filter + auto-highlight ____ autoComplete div
    @Input() formControl;
    @Input() isRequired;
    @Input() isDisabled;
    @Input() isReadOnly;
    @Input() hasValidator;
    @Input() validator; //email, cpf, cnpj

    constructor() {}
}