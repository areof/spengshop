import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {
​​​​​
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {​​​​​
    this.form = this.formBuilder.group({
      tax: [0, Validators.required],
      id: [0, Validators.required],
      name: ['', Validators.required]
    });
  }

​​​​​

  ngOnInit(): void {​​​​​
  }

​​​​​

  onSubmit(): void {​​​​​
    console.log(this.form);
    if (this.form.valid) {​​​​​
      // TODO Produkt speichern
    }​​​​​ else
    {​​​​​
      this.form.markAllAsTouched();
    }​​​​​
  }

​​​​​
}​​​​​
