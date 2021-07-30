import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-example-one',
  templateUrl: './example-one.component.html',
  styleUrls: ['./example-one.component.sass']
})
export class ExampleOneComponent implements OnInit {
  exampleForm1 = this.formBuilder.group(
    {
      typeCust: '', name: ['', [Validators.required, Validators.minLength(4)]], surname: [''], citizenid: [''], juristicid: ['']
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
  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
  }

  save(): void {
    console.warn(this.exampleForm1.value);
  }
}
