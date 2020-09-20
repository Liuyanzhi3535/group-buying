import { take } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClonerService } from 'src/app/core/services/cloner.service';
import { ProductService } from '../../services/product.service';
import { Product } from '../..';


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  model;
  mode = 'create';

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router,
    private clonerSevice: ClonerService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      const productId = paramMap.get('id');
      let product = new Product('', '', null, '', '', '');
      if (productId) {
        this.mode = 'edit';
        this.productService
          .getProductById(productId)
          .pipe(take(1))
          .subscribe((productData) => (product = productData));
      }
      this.model = this.clonerSevice.deepClone(product);
    });
  }

  saveData(product) {
    if (this.mode === 'create') {
      this.createProduct(product);
    } else {
      this.updateProduct(product);
    }
  }

  createProduct(product) {
    this.productService.createProduct(product);
    // TODO: 導向到新的 item
    this.router.navigate(['start'], { relativeTo: this.route });
  }

  updateProduct(product) {
    this.productService.updateProduct(product);
  }

}
