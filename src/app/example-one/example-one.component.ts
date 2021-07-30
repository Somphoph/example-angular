import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-example-one',
  templateUrl: './example-one.component.html',
  styleUrls: ['./example-one.component.sass']
})
export class ExampleOneComponent implements OnInit {
  exampleForm1 = this.fb.group(
    {
      typeCust: '', name: ['', [Validators.required, Validators.minLength(4)]], surname: [''], citizenid: [''], juristicid: ['']
      , aliases: this.fb.array([this.fb.control('')])
    });
  options: Array<any> = [
    {
      value: '1',
      label: 'บุคคลธรรมดา'
    },
    {
      value: '2',
      label: 'นิติบุคคล'
    },
  ];
  constructor(private fb: FormBuilder) {
  }
  get aliases(): FormArray {
    return this.exampleForm1.get('aliases') as FormArray;
  }
  ngOnInit(): void {
  }

  save(): void {
    console.warn(this.exampleForm1.value);
  }

  addAlias(): void {
    this.aliases.push(this.fb.control(''));
  }
}
