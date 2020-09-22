import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '..';
import { ClonerService } from '../../core/services/cloner.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products$ = new BehaviorSubject<Product[]>([
    {
      id: '1',
      name: '特上紅茶',
      description: '無',
      unitPrice: 25,
      category: '',
      image: '',
      customization: '',
    },
    {
      id: '2',
      name: '四季春茶',
      description: '無',
      unitPrice: 30,
      category: '',
      image: '',
      customization: '',
    },
    {
      id: '3',
      name: '綠茶',
      description: '無',
      unitPrice: 25,
      category: '',
      image: '',
      customization: '',
    },
  ]);

  constructor(private clonerService: ClonerService) {}

  fetchProductByMerchant() {}

  getpProducts() {
    return this.products$.asObservable();
  }

  getProductById(id): Observable<Product> {
    return this.products$.pipe(map((val) => val.find((product) => product.id === id)));
  }

  createProduct(product) {
    let updatedpProducts = this.clonerService.deepClone(this.products$.getValue());
    updatedpProducts = [
      ...updatedpProducts,
      { ...product, id: (+new Date() + Math.random()).toString() },
    ];
    console.log(updatedpProducts);
    this.products$.next(updatedpProducts);
  }

  updateProduct(product) {
    const updatedpProducts = this.clonerService.deepClone(this.products$.getValue());
    const productIndex = updatedpProducts.findIndex(
      (productData) => productData.id === product.id
    );
    updatedpProducts[productIndex] = product;
    this.products$.next(updatedpProducts);
  }

  deleteProduct(productId) {
    let updatedpProducts = this.clonerService.deepClone(this.products$.getValue());
    updatedpProducts = updatedpProducts.filter((productData) => productData.id !== productId);
    this.products$.next(updatedpProducts);
  }
}
