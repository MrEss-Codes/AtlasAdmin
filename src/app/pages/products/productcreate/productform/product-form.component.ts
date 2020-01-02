import { Component, HostBinding } from '@angular/core';
import { ProductService } from '../../../../shared/services/product/product.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  styleUrls: ['./product-form.component.scss'],
  templateUrl: 'product-form.component.html',
})
export class ProductFormComponent {
  @HostBinding('class.productform') private readonly productForm = true;

  createProductForm = new FormGroup({

                                title: new FormControl(''),
                                description: new FormControl(''),
                                brand: new FormControl(''),
                                type: new FormControl(''),
                                price: new FormControl(''),
                                picture: new FormControl(''),

                              });


  constructor(private service: ProductService, private router: Router) {}

  ngOnInit() {
  }


  save() {
    const newProduct = this.createProductForm.value;

    this.service.createProduct(newProduct).subscribe(o => { this.router.navigateByUrl('/app/products'); } );
  }

}
