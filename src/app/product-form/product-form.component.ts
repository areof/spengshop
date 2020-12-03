import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CategoryService} from '../services/category.service';
import {Category} from '../model/category';
import {Observable} from 'rxjs';
import {Product} from '../model/product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit, OnChanges  {

  @Output() formSaved: EventEmitter<Product> = new EventEmitter<Product>();
  @Input() product: Product;

  form: FormGroup;

  categories$: Observable<Category[]>;

  constructor(
    private formBuilder: FormBuilder,
    private categoryService: CategoryService
  ) {
    this.form = this.formBuilder.group({
      artNo: ['', Validators.required],
      name: ['', Validators.required],
      price: ['', Validators.required],
      category: ['', Validators.required],
      description: ['']
    });
    this.categories$ = categoryService.getAll();
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.product && changes.product.currentValue) {
      const p: Product = changes.product.currentValue;
      this.form.controls.artNo.setValue(p.artNo);
      this.form.controls.name.setValue(p.name);
      this.form.controls.price.setValue(p.price);
      this.form.controls.category.setValue(p.category);
      this.form.controls.description.setValue(p.description);
      console.log(this.form);
    }
  }

  onSubmit(): void {

    if (! this.form.valid) {​​​​​
      this.form.markAllAsTouched();
      return;
    }
    this.formSaved.emit({
      artNo: this.form.get('artNo').value,
      name: this.form.get('name').value,
      price: this.form.get('price').value,
      category: this.form.get('category').value,
      description: this.form.get('description').value
    });​​​​​
  }
}
