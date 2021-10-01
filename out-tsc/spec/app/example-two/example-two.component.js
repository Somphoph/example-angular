import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ExampleTwoComponent = class ExampleTwoComponent {
    constructor(fb, controlContainer) {
        this.fb = fb;
        this.controlContainer = controlContainer;
        this.formGroup = controlContainer.control;
    }
    ngOnInit() {
    }
    get aliases() {
        return this.formGroup.get('aliases');
    }
    addAlias() {
        this.aliases.push(this.fb.group({ alias: [''], desc: [''] }));
    }
};
ExampleTwoComponent = __decorate([
    Component({
        selector: 'app-example-two',
        templateUrl: './example-two.component.html',
        styleUrls: ['./example-two.component.sass']
    })
], ExampleTwoComponent);
export { ExampleTwoComponent };
//# sourceMappingURL=example-two.component.js.map
