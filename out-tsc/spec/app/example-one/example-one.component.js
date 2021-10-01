import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
let ExampleOneComponent = class ExampleOneComponent {
    constructor(fb) {
        this.fb = fb;
        this.exampleForm1 = this.fb.group({
            typeCust: '', name: ['', [Validators.required, Validators.minLength(4)]], surname: [''], citizenid: [''], juristicid: ['']
        });
        this.options = [
            {
                value: '1',
                label: 'บุคคลธรรมดา'
            },
            {
                value: '2',
                label: 'นิติบุคคล'
            },
        ];
    }
    ngOnInit() {
    }
    save() {
        console.warn(this.exampleForm1.value);
    }
};
ExampleOneComponent = __decorate([
    Component({
        selector: 'app-example-one',
        templateUrl: './example-one.component.html',
        styleUrls: ['./example-one.component.sass']
    })
], ExampleOneComponent);
export { ExampleOneComponent };
//# sourceMappingURL=example-one.component.js.map