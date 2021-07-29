import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-example-one',
  templateUrl: './example-one.component.html',
  styleUrls: ['./example-one.component.sass']
})
export class ExampleOneComponent implements OnInit {
  exampleForm1 = this.formBuilder.group({name: '', address: ''});

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
  }

}
