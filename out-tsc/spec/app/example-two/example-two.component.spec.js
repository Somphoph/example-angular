/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { ExampleTwoComponent } from './example-two.component';
describe('ExampleTwoComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ExampleTwoComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(ExampleTwoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=example-two.component.spec.js.map