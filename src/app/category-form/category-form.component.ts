import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Category} from '../model/category';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit, OnChanges {

  @Output() formSaved: EventEmitter<Category> = new EventEmitter<Category>();
  @Input() category: Category;
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
    console.log(this.category);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.category && changes.category.currentValue) {
      const c: Category = changes.category.currentValue;
      this.form.controls.tax.setValue(c.tax);
      this.form.controls.name.setValue(c.name);
      console.log(this.form);
    }
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
