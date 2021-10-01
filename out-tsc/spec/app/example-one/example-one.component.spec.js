import { __awaiter } from "tslib";
import { TestBed } from '@angular/core/testing';
import { ExampleOneComponent } from './example-one.component';
describe('ExampleOneComponent', () => {
    let component;
    let fixture;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield TestBed.configureTestingModule({
            declarations: [ExampleOneComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(ExampleOneComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=example-one.component.spec.js.map