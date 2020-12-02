import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Category} from '../model/category';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {

  @Output() formSaved: EventEmitter<Category> = new EventEmitter<Category>();
​​​​​
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {​​​​​
    this.form = this.formBuilder.group({
      tax: [0, Validators.required],
      name: ['', Validators.required]
    });
  }

  ngOnInit(): void {​​​​​
  }

  onSubmit(): void {​​​​​
    if (! this.form.valid) {​​​​​
      this.form.markAllAsTouched();
      return;
    }
    this.formSaved.emit({
      tax: this.form.get('tax').value,
      name: this.form.get('name').value
    });​​​​​
  }
}​​​​​
