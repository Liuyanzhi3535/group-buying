import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  items$: Observable<Product[]>;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.items$ = this.productService.getpProducts();
  }

  deleteProduct(productId) {
    this.productService.deleteProduct(productId);
    // TODO: 導向起始頁面
    this.router.navigate(['start'], { relativeTo: this.route });
    // });
  }
}
