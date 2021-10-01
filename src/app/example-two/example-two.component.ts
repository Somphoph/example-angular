import {Component, Input, OnInit} from '@angular/core';
import {ControlContainer, FormArray, FormBuilder, FormGroup, FormGroupDirective} from '@angular/forms';

@Component({
  selector: 'app-example-two',
  templateUrl: './example-two.component.html',
  styleUrls: ['./example-two.component.sass']
})
export class ExampleTwoComponent implements OnInit {
  formGroup: FormGroup;
  constructor(private fb: FormBuilder, private rootFormGroup: FormGroupDirective) {
    this.formGroup = fb.group({});
  }

  ngOnInit(): void {
    this.formGroup = this.rootFormGroup.control;
    console.log(this.formGroup);
    this.formGroup.addControl('aliases', this.fb.array([this.fb.group({alias: [''], desc: ['']})]));
    console.log(this.formGroup);
  }

  get aliases(): FormArray {
    return this.formGroup.get('aliases') as FormArray;
  }

  addAlias(): void {
    this.aliases.push(this.fb.group({alias: [''], desc: ['']}));
  }
}
